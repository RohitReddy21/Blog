import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Heart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const navigation = [
  { name: "Blogs", href: "/" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  const onSubmitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed.length === 0) return;
    navigate(`/?q=${encodeURIComponent(trimmed)}`);
  };

  return (
    <header className="border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex h-24 items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex lg:flex-1 min-w-0">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
              <span className="text-2xl font-heading font-bold text-foreground truncate flex items-center space-x-2">
                <img
                  src="/images/LOGO.jpg"
                  alt="Everyday Health Talks"
                  className="w-36 h-16 rounded-full object-cover"
                />
              </span>
            </Link>
          </div>

          {/* Center search (desktop) */}
          <div className="hidden md:flex flex-1 justify-center">
            <form onSubmit={onSubmitSearch} className="w-full max-w-lg">
              <div className="relative">
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles, topics, tags..."
                  className="pl-10 pr-24 h-10 rounded-full"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full px-4"
                >
                  Search
                </Button>
              </div>
            </form>
          </div>

          {/* Desktop navigation + CTA */}
          <div className="hidden lg:flex items-center gap-x-6">
            <div className="flex gap-x-8">
              {/* {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-lg font-semibold transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))} */}
            </div>
            <Button asChild className="rounded-full px-5 shadow-sm">
              <Link to="/contact">Book an appointment</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-7 w-7" aria-hidden={true} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Search (mobile) under bar */}
      <div className="md:hidden border-t border-border px-4 py-2">
        <form onSubmit={onSubmitSearch} className="w-full">
          <div className="relative">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles, topics, tags..."
              className="pl-10 pr-24 h-10 rounded-full"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Button
              type="submit"
              size="sm"
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full px-4"
            >
              Search
            </Button>
          </div>
        </form>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
  <div className="lg:hidden">
    {/* Background overlay */}
    <div
      className="fixed inset-0 z-40 bg-black/60"
      onClick={() => setMobileMenuOpen(false)}
    />

    {/* Fullscreen menu */}
    <div className="fixed inset-0 z-50 flex flex-col bg-background px-6 py-6">
      {/* Header with logo + close button */}
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="-m-1.5 p-1.5 flex items-center space-x-2"
          onClick={() => setMobileMenuOpen(false)}
        >
          <img
            src="/images/LOGO.jpg"
            alt="Everyday Health Talks"
            className="w-36 h-16 rounded-full object-cover"
          />
        </Link>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setMobileMenuOpen(false)}
          className="-m-2.5 rounded-md p-2.5"
        >
          <span className="sr-only">Close menu</span>
          <X className="h-7 w-7" aria-hidden={true} />
        </Button>
      </div>

      {/* Navigation links */}
      <div className="mt-10 flex-1 flex flex-col justify-between">
        <div className="space-y-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block rounded-lg px-4 py-3 text-xl font-semibold transition-colors duration-200 ${
                isActive(item.href)
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA button */}
        <div className="mt-10">
          <Button
            asChild
            className="w-full rounded-full py-4 text-lg"
            size="lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Link to="/contact">Book an appointment</Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
)}
    </header>
  );
}
