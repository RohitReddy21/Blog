import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-heading">
              Trusted <span className="text-primary">Health Insights</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Expert advice on nutrition, fitness, and wellness you can rely on.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg" className="hero-shadow">
                <Link to="/category/nutrition">
                  Explore Topics
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact" className="flex items-center">
                  <Play className="mr-2 w-4 h-4" />
                  Learn More
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="/images/heart-healthy-food.jpg"
              alt="Healthy lifestyle"
              className="rounded-xl shadow-lg object-cover w-full h-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
