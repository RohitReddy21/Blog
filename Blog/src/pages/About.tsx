import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, BookOpen, Award } from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "About Us - HealthHub";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about HealthHub - your trusted source for evidence-based health information from medical professionals.');
    }
  }, []);

  const stats = [
    { name: "Medical Professionals", value: "50+", icon: Users },
    { name: "Health Articles", value: "1,000+", icon: BookOpen },
    { name: "Years of Experience", value: "15+", icon: Award },
    { name: "Health Categories", value: "8", icon: Heart },
  ];

  const team = [
    {
      name: "Dr. Sarah Martinez",
      role: "Chief Medical Officer",
      specialty: "Cardiology & Nutrition",
      description: "Board-certified cardiologist with 15+ years of experience in preventive medicine and heart health.",
    },
    {
      name: "Dr. Michael Chen",
      role: "Mental Health Director",
      specialty: "Psychiatry & Wellness",
      description: "Specialized in workplace mental health and stress management with extensive research background.",
    },
    {
      name: "Dr. Lisa Thompson",
      role: "Preventive Care Specialist",
      specialty: "Family Medicine",
      description: "Focused on diabetes prevention and chronic disease management in community health settings.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-heading mb-6">
          About HealthHub
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We're dedicated to providing you with accurate, evidence-based health information 
          that empowers you to make informed decisions about your wellbeing.
        </p>
      </div>

      {/* Mission section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground font-heading mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              In a world flooded with health misinformation, HealthHub serves as your 
              trusted beacon of scientifically-backed wellness guidance. Our team of 
              medical professionals works tirelessly to translate complex medical research 
              into practical, actionable advice.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that everyone deserves access to reliable health information, 
              regardless of their background or circumstances. Our content is designed 
              to be accessible, comprehensive, and most importantly, trustworthy.
            </p>
          </div>
          <div className="relative">
            <img
              src="/images/hero-medical.jpg"
              alt="Medical professionals"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <Card key={stat.name} className="text-center">
              <CardContent className="p-6">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.name}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Values section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground font-heading mb-12 text-center">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-primary" />
                Evidence-Based
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Every piece of content is backed by peer-reviewed research and 
                reviewed by qualified medical professionals.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-primary" />
                Accessible
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We translate complex medical information into clear, understandable 
                language for everyone.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="w-5 h-5 mr-2 text-primary" />
                Compassionate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We understand that health journeys are personal and approach 
                every topic with empathy and care.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground font-heading mb-12 text-center">
          Meet Our Medical Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={member.name}>
              <CardHeader>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <div className="space-y-2">
                  <Badge variant="outline">{member.role}</Badge>
                  <p className="text-sm text-primary font-medium">
                    {member.specialty}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-muted rounded-xl p-8 text-center">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Important Disclaimer
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          The information provided on HealthHub is for educational and informational 
          purposes only and should not be used as a substitute for professional medical 
          advice, diagnosis, or treatment. Always consult with qualified healthcare 
          providers regarding any health concerns or before making any changes to your 
          healthcare routine.
        </p>
      </section>
    </div>
  );
}