import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { allBlogPosts, getPostsByCategory } from "@/data/blogData";

const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export default function CategoryPage() {
  const { category: categorySlug } = useParams<{ category: string }>();
  const [posts, setPosts] = useState<typeof allBlogPosts>([]);
  const [displayedPosts, setDisplayedPosts] = useState<typeof allBlogPosts>([]);
  const [postsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const categoryMap = useMemo(() => {
    const unique = Array.from(new Set(allBlogPosts.map((p) => p.category)));
    const map = new Map<string, string>();
    for (const name of unique) {
      map.set(slugify(name), name);
    }
    return map;
  }, []);

  const categoryDisplayName = categorySlug ? categoryMap.get(categorySlug) || "" : "";

  useEffect(() => {
    if (categoryDisplayName) {
      const categoryPosts = getPostsByCategory(categoryDisplayName);
      setPosts(categoryPosts);
      setDisplayedPosts(categoryPosts.slice(0, postsPerPage));
      setCurrentPage(1);

      document.title = `${categoryDisplayName} Articles - HealthHub`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `Expert ${categoryDisplayName.toLowerCase()} advice and evidence-based articles from medical professionals.`);
      }
    }
  }, [categoryDisplayName, postsPerPage]);

  const loadMore = () => {
    const nextPage = currentPage + 1;
    const startIndex = 0;
    const endIndex = nextPage * postsPerPage;
    setDisplayedPosts(posts.slice(startIndex, endIndex));
    setCurrentPage(nextPage);
  };

  const hasMore = displayedPosts.length < posts.length;

  if (!categoryDisplayName) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Category not found</h1>
          <Button asChild>
            <a href="/">Return Home</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Page header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-heading mb-4">
          {categoryDisplayName}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Expert {categoryDisplayName.toLowerCase()} advice and evidence-based articles 
          from our team of medical professionals.
        </p>
        <div className="mt-6">
          <span className="text-sm text-muted-foreground">
            {posts.length} article{posts.length !== 1 ? 's' : ''} found
          </span>
        </div>
      </div>

      {/* Articles grid */}
      {displayedPosts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          {/* Load more button */}
          {hasMore && (
            <div className="text-center">
              <Button onClick={loadMore} variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            No articles found in this category
          </h2>
          <p className="text-muted-foreground mb-8">
            We're constantly adding new content. Check back soon for updates!
          </p>
          <Button asChild>
            <a href="/">Browse All Articles</a>
          </Button>
        </div>
      )}
    </div>
  );
}