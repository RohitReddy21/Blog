import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const navigation = {
  main: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  categories: [
    { name: "Nutrition", href: "/category/nutrition" },
    { name: "Fitness", href: "/category/fitness" },
    { name: "Mental Health", href: "/category/mental-health" },
    { name: "Preventive Care", href: "/category/preventive-care" },
  ],
  contact: [
    { name: "info@healthhub.com", href: "mailto:info@healthhub.com", icon: Mail },
    { name: "(555) 123-4567", href: "tel:+15551234567", icon: Phone },
    { name: "New York, NY", href: "#", icon: MapPin },
  ],
  social: [
    { name: "Facebook", href: "https://facebook.com/healthtalks", icon: Facebook },
    { name: "Twitter", href: "https://twitter.com/healthtalks", icon: Twitter },
    { name: "Instagram", href: "https://instagram.com/healthtalks", icon: Instagram },
    { name: "LinkedIn", href: "https://linkedin.com/company/healthtalks", icon: Linkedin },
    { name: "YouTube", href: "https://youtube.com/healthtalks", icon: Youtube },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-muted mt-16">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo and description */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-2">
                {/* <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary-foreground" />
                </div> */}
              <span className="text-2xl font-heading font-bold text-foreground truncate flex items-center space-x-2">
                <img
                  src="/images/LOGO.jpg"
                  alt="Everyday Health Talks"
                  className="w-36 h-20 object-cover"
                />
              </span>
            </Link>
            <p className="text-sm leading-6 text-muted-foreground max-w-md">
              Your trusted source for evidence-based health information, wellness tips, 
              and expert guidance to help you live your healthiest life.
            </p>
            
            {/* Social Media Links */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold leading-6 text-foreground mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    aria-label={item.name}
                  >
                    <item.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            {/* Quick Links */}
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  Quick Links
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-smooth"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  Health Topics
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.categories.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-smooth"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">
                Contact Info
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.contact.map((item) => (
                  <li key={item.name} className="flex items-center space-x-3">
                    <item.icon className="w-4 h-4 text-primary" />
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-muted-foreground">
              &copy; 2024 HealthHub. All rights reserved.
            </p>
            <p className="mt-4 text-xs leading-5 text-muted-foreground sm:mt-0">
              This information is for educational purposes only and should not replace professional medical advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}