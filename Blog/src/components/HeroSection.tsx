import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-heading">
              Your trusted source for{" "}
              <span className="text-primary">evidence-based</span> health information
            </h1>
            <p className="relative mt-6 text-lg leading-8 text-muted-foreground sm:max-w-md lg:max-w-none">
              Get expert insights on nutrition, fitness, mental health, and preventive care. 
              Our team of medical professionals delivers accurate, actionable health advice 
              you can trust.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button asChild size="lg" className="hero-shadow">
                <Link to="/category/nutrition">
                  Explore Health Topics
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about" className="flex items-center">
                  <Play className="mr-2 w-4 h-4" />
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
            <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
              <div className="relative">
                <img
                  src="/images/heart-healthy-food.jpg"
                  alt="Heart healthy foods"
                  className="aspect-[2/3] w-full rounded-xl bg-muted object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-border" />
              </div>
            </div>
            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
              <div className="relative">
                <img
                  src="/images/workplace-wellness.jpg"
                  alt="Workplace wellness"
                  className="aspect-[2/3] w-full rounded-xl bg-muted object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-border" />
              </div>
              <div className="relative">
                <img
                  src="/images/diabetes-prevention.jpg"
                  alt="Diabetes prevention"
                  className="aspect-[2/3] w-full rounded-xl bg-muted object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-border" />
              </div>
            </div>
            <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
              <div className="relative">
                <img
                  src="/images/womens-health.jpg"
                  alt="Women's health"
                  className="aspect-[2/3] w-full rounded-xl bg-muted object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-border" />
              </div>
              <div className="relative">
                <img
                  src="/images/sleep-health.jpg"
                  alt="Sleep health"
                  className="aspect-[2/3] w-full rounded-xl bg-muted object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-border" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}