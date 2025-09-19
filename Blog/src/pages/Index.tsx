import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import BlogCard from "@/components/BlogCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { TrendingUp, Clock } from "lucide-react";
import { allBlogPosts, getFeaturedPost, getRecentPosts } from "@/data/blogData";

const Index = () => {
  const featuredPost = getFeaturedPost();
  const recentPosts = getRecentPosts(6);
  const trendingPosts = allBlogPosts.slice(0, 5); // Mock trending posts

  useEffect(() => {
    document.title = "HealthHub - Your Trusted Source for Evidence-Based Health Information";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get expert insights on nutrition, fitness, mental health, and preventive care from medical professionals. Evidence-based health advice you can trust.');
    }
  }, []);

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
            {[
              { name: "Nutrition", count: "15 articles", href: "/category/nutrition" },
              { name: "Fitness", count: "12 articles", href: "/category/fitness" },
              { name: "Mental Health", count: "18 articles", href: "/category/mental-health" },
              { name: "Preventive Care", count: "10 articles", href: "/category/preventive-care" },
            ].map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="group p-6 bg-background rounded-lg card-shadow hover:shadow-lg transition-smooth"
              >
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">{category.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
