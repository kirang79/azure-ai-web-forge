import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar, Users, Clock, Award, Star } from "lucide-react";

export const CourseEnrollment = () => {
  const features = [
    "24 weeks of intensive training",
    "Live online sessions 3x per week",
    "Small cohort of max 15 students",
    "1-on-1 mentorship sessions",
    "3 capstone projects for portfolio",
    "Career coaching and resume review",
    "Access to alumni network",
    "Certificate of completion",
    "6 months of post-course support",
    "Industry mentor connections"
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Developer at Microsoft",
      avatar: "S",
      quote: "This program transformed my career. The hands-on approach and expert mentorship helped me land my dream job at Microsoft."
    },
    {
      name: "Marcus Rodriguez",
      role: "Full-Stack Engineer at Startup",
      avatar: "M", 
      quote: "The AI integration modules were game-changing. I'm now leading AI initiatives at my company thanks to this course."
    },
    {
      name: "Jennifer Kim",
      role: "Cloud Architect at Amazon",
      avatar: "J",
      quote: "Best investment in my career. The Azure expertise I gained here directly led to my promotion to Cloud Architect."
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Limited Seats Available
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Join the Next Cohort
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your development career with our comprehensive program. 
            Next cohort starts February 2024.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Pricing Card */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-primary/20 shadow-elevated relative overflow-hidden">
              {/* Popular Badge */}
              <div className="absolute top-4 right-4">
                <Badge className="bg-accent text-accent-foreground">
                  <Star className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
              </div>
              
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold">Full-Stack Mastery Program</CardTitle>
                    <p className="text-muted-foreground">Complete .NET + Azure + AI bootcamp</p>
                  </div>
                </div>
                
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">$4,999</span>
                  <span className="text-lg text-muted-foreground">/ one-time payment</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Or 3 monthly payments of $1,799
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Key Features */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3 pt-6">
                  <Button 
                    variant="gradient" 
                    size="lg" 
                    className="w-full text-lg h-12"
                  >
                    Enroll Now - Save $1,000
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full"
                  >
                    Schedule Info Session
                  </Button>
                </div>

                {/* Guarantee */}
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <p className="text-sm font-medium">30-Day Money-Back Guarantee</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Not satisfied? Get a full refund within 30 days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Program Details */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Next Cohort
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Start Date:</span>
                  <span className="font-medium">Feb 12, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">24 Weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Schedule:</span>
                  <span className="font-medium">Mon/Wed/Fri</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time:</span>
                  <span className="font-medium">7-9 PM EST</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-secondary" />
                  Class Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Spots Left:</span>
                  <span className="font-medium text-accent">6 of 15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Format:</span>
                  <span className="font-medium">Live Online</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Prerequisites:</span>
                  <span className="font-medium">Basic Programming</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-8 text-foreground">What Our Alumni Say</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "{testimonial.quote}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};