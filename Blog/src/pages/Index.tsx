import { useEffect, useMemo } from "react";
import HeroSection from "@/components/HeroSection";
import BlogCard from "@/components/BlogCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "react-router-dom";
import { TrendingUp, Clock, Search, Apple, Dumbbell, Brain, Shield, Heart, Activity, Baby, Users, Tag } from "lucide-react";
import { allBlogPosts, getFeaturedPost, getRecentPosts } from "@/data/blogData";

const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const categoryIcon = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes("nutrition")) return Apple;
  if (lower.includes("fitness")) return Dumbbell;
  if (lower.includes("mental")) return Brain;
  if (lower.includes("prevent")) return Shield;
  if (lower.includes("chronic") || lower.includes("heart")) return Heart;
  if (lower.includes("men")) return Users;
  if (lower.includes("women")) return Users;
  if (lower.includes("child")) return Baby;
  return Tag;
};

const Index = () => {
  const featuredPost = getFeaturedPost();
  const recentPosts = getRecentPosts(6);
  const trendingPosts = allBlogPosts.slice(0, 5); // Mock trending posts

  const queryParams = useQuery();
  const q = (queryParams.get("q") || "").trim();

  const filteredPosts = useMemo(() => {
    if (!q) return [];
    const lower = q.toLowerCase();
    return allBlogPosts.filter((post) => {
      return (
        post.title.toLowerCase().includes(lower) ||
        post.excerpt.toLowerCase().includes(lower) ||
        post.content.toLowerCase().includes(lower) ||
        post.tags.some((t) => t.toLowerCase().includes(lower)) ||
        post.category.toLowerCase().includes(lower)
      );
    });
  }, [q]);

  const categoriesWithCounts = useMemo(() => {
    const map = new Map<string, number>();
    for (const post of allBlogPosts) {
      map.set(post.category, (map.get(post.category) || 0) + 1);
    }
    return Array.from(map.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8); // show top 8 categories; can adjust
  }, []);

  useEffect(() => {
    if (q) {
      document.title = `Search: ${q} - HealthHub`;
    } else {
      document.title = "HealthHub - Your Trusted Source for Evidence-Based Health Information";
    }
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        q
          ? `Search results for ${q} across our health articles.`
          : 'Get expert insights on nutrition, fitness, mental health, and preventive care from medical professionals. Evidence-based health advice you can trust.'
      );
    }
  }, [q]);

  if (q) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading">
            Search Results
          </h1>
          <div className="text-muted-foreground flex items-center text-sm">
            <Search className="w-4 h-4 mr-2" />
            <span>
              {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''} for "{q}"
            </span>
          </div>
        </div>
        {filteredPosts.length === 0 ? (
          <div className="text-center text-muted-foreground">
            No articles found. Try different keywords.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Article */}
      {featuredPost && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading mb-4">
              Featured Article
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't miss our editor's pick for essential health insights
            </p>
          </div>
          <BlogCard post={featuredPost} featured />
        </section>
      )}

      {/* Recent Posts & Trending Sidebar */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Recent Posts */}
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading mb-4">
                Latest Health Articles
              </h2>
              <p className="text-lg text-muted-foreground">
                Stay updated with our latest evidence-based health content
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Trending Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                  Trending This Week
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {trendingPosts.map((post, index) => (
                  <div key={post.id} className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium leading-tight mb-2">
                        <Link
                          to={`/blog/${post.id}`}
                          className="hover:text-primary transition-smooth"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recommended Section */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading mb-4">
              Recommended For You
            </h2>
            <p className="text-lg text-muted-foreground">
              Curated reads based on popularity and diversity across categories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {allBlogPosts.slice(3, 6).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Health Categories */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading mb-4">
              Explore Health Topics
            </h2>
            <p className="text-lg text-muted-foreground">
              Browse our comprehensive collection of health and wellness content
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categoriesWithCounts.map(([name, count]) => {
              const slug = slugify(name);
              const Icon = categoryIcon(name);
              return (
                <Link
                  key={name}
                  to={`/category/${slug}`}
                  className="group relative overflow-hidden p-6 bg-background rounded-lg border border-border card-shadow hover:shadow-lg transition-all duration-300 transform-gpu hover:-translate-y-1"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
                  <div className="relative flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center ring-1 ring-primary/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {count} article{count !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
