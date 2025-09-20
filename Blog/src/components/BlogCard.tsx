import { Link } from "react-router-dom";
import { Calendar, Clock, User } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/data/blogData";
import { Button } from "@/components/ui/button";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const CardComponent = featured ? "div" : Card;
  
  if (featured) {
    return (
      <div className="relative overflow-hidden rounded-xl bg-card card-shadow">
        <div className="aspect-[16/9] sm:aspect-[2/1] lg:aspect-[3/2]">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <div className="mb-3">
            <Badge variant="secondary" className="bg-primary text-primary-foreground">
              {post.category}
            </Badge>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-3 leading-tight">
            <Link
              to={`/blog/${post.id}`}
              className="hover:text-primary-light transition-smooth"
            >
              {post.title}
            </Link>
          </h2>
          <p className="text-gray-200 mb-4 text-sm sm:text-base leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center text-xs sm:text-sm text-gray-300 space-x-4">
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
          <div className="mt-4">
            <Button asChild size="sm" variant="secondary">
              <Link to="/contact">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Card className="overflow-hidden card-shadow hover:shadow-lg transition-smooth group">
      <Link to={`/blog/${post.id}`} className="block">
        <CardHeader className="p-0">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover group-hover:scale-105 transition-smooth duration-500"
            />
          </div>
        </CardHeader>
      </Link>
      <CardContent className="p-6">
        <div className="mb-3">
          <Badge variant="outline" className="text-xs">
            {post.category}
          </Badge>
        </div>
        <h3 className="text-xl font-heading font-semibold mb-3 leading-tight hover:text-primary transition-smooth">
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center text-xs text-muted-foreground space-x-4 mb-4">
          <div className="flex items-center space-x-1">
            <User className="w-3 h-3" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="w-3 h-3" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <Button asChild size="sm" className="shadow-sm">
          <Link to="/contact">Book Appointment</Link>
        </Button>
      </CardContent>
    </Card>
  );
}