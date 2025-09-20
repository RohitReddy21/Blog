import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Contact Us - HealthHub";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Get in touch with HealthHub - we'd love to hear from you. Contact our team for questions, feedback, or collaboration opportunities."
      );
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // 🔑 Replace with your Web3Forms Access Key
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for contacting us. We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", phone: "", email: "", city: "" });
      } else {
        toast({
          title: "Error",
          description: result.message || "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Unable to send message. Check your connection.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, title: "Email", content: "info@healthhub.com", href: "mailto:info@healthhub.com" },
    { icon: Phone, title: "Phone", content: "(555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, title: "Office", content: "New York, NY 10001", href: "#" },
  ];

  const socialMedia = [
    { icon: Facebook, name: "Facebook", href: "https://facebook.com/healthtalks", color: "hover:text-blue-600" },
    { icon: Twitter, name: "Twitter", href: "https://twitter.com/healthtalks", color: "hover:text-blue-400" },
    { icon: Instagram, name: "Instagram", href: "https://instagram.com/healthtalks", color: "hover:text-pink-600" },
    { icon: Linkedin, name: "LinkedIn", href: "https://linkedin.com/company/healthtalks", color: "hover:text-blue-700" },
    { icon: Youtube, name: "YouTube", href: "https://youtube.com/healthtalks", color: "hover:text-red-600" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Page header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-heading mb-6">
          Contact Us
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Have a question, suggestion, or just want to say hello? We'd love to
          hear from you. Our team is here to help and we respond to all
          inquiries within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name *</label>
                    <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                    <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="Your phone number" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-foreground mb-2">City *</label>
                    <Input id="city" name="city" type="text" required value={formData.city} onChange={handleChange} placeholder="Your city" />
                  </div>
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? "Submitting..." : (<><Send className="w-4 h-4 mr-2" />Submit Information</>)}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact info + Social */}
        <div className="space-y-8">
          <Card>
            <CardHeader><CardTitle>Get in Touch</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{item.title}</h3>
                    <a href={item.href} className="text-muted-foreground hover:text-primary transition-smooth">{item.content}</a>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card>
            <CardHeader><CardTitle>Follow Us</CardTitle></CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">Stay connected with us on social media for the latest health tips and updates.</p>
              <div className="flex flex-wrap gap-4">
                {socialMedia.map((social) => (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border border-border text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/5 ${social.color}`}>
                    <social.icon className="h-5 w-5" />
                    <span className="text-sm font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
