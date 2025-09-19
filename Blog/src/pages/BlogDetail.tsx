import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import BlogCard from "@/components/BlogCard";
import { allBlogPosts, getRelatedPosts } from "@/data/blogData";
import { useToast } from "@/hooks/use-toast";

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState(allBlogPosts.find(p => p.id === id));
  const { toast } = useToast();

  useEffect(() => {
    if (id) {
      const foundPost = allBlogPosts.find(p => p.id === id);
      setPost(foundPost);
      
      if (foundPost) {
        document.title = `${foundPost.title} - HealthHub`;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', foundPost.excerpt);
        }
      }
    }
  }, [id]);

  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Article link has been copied to your clipboard.",
      });
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Article not found</h1>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post.id);

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Back button */}
      <div className="mb-8">
        <Button variant="ghost" asChild className="p-0">
          <Link to="/" className="flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>
        </Button>
      </div>

      {/* Article header */}
      <header className="mb-12">
        <div className="mb-4">
          <Badge variant="outline">{post.category}</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-heading mb-6">
          {post.title}
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          {post.excerpt}
        </p>
        
        {/* Article meta */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>{new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>{post.readTime} read</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleShare}
            className="ml-auto"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>

        {/* Featured image */}
        <div className="aspect-[16/9] overflow-hidden rounded-xl mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>
      </header>

      {/* Article content */}
      <div className="blog-content">
        <div 
          dangerouslySetInnerHTML={{ 
            __html: post.content
              .replace(/\n\n/g, '</p><p>')
              .replace(/^/, '<p>')
              .replace(/$/, '</p>')
              .replace(/#{1,6}\s(.*?)(<\/p>|$)/g, '<h2>$1</h2>')
              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              .replace(/\n/g, '<br>')
          }} 
        />
      </div>

      {/* Tags */}
      <div className="mt-12 pt-8 border-t border-border">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              #{tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Comments placeholder */}
      <section className="mt-16">
        <Separator className="mb-8" />
        <Card>
          <CardHeader>
            <CardTitle>Comments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center py-8">
              Comments section coming soon. We're working on bringing you a safe space 
              for health discussions.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground font-heading mb-8">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <BlogCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}