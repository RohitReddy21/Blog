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
    <Card className="overflow-hidden card-shadow hover:shadow-xl transition-all duration-300 group border-0 bg-gradient-to-br from-background to-muted/20">
      <Link to={`/blog/${post.id}`} className="block">
        <CardHeader className="p-0 relative">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary/90 text-primary-foreground border-0 shadow-lg">
              {post.category}
            </Badge>
          </div>
        </CardHeader>
      </Link>
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-heading font-semibold mb-3 leading-tight group-hover:text-primary transition-colors duration-200">
            <Link to={`/blog/${post.id}`} className="line-clamp-2">{post.title}</Link>
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>
        
        <div className="flex items-center text-xs text-muted-foreground space-x-4 py-2">
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

        <div className="flex items-center justify-between pt-2">
          <Button asChild size="sm" variant="outline" className="rounded-full">
            <Link to={`/blog/${post.id}`}>Read More</Link>
          </Button>
          <Button asChild size="sm" className="rounded-full shadow-sm">
            <Link to="/contact">Book Appointment</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}