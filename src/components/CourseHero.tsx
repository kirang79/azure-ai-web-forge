import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Clock, Globe } from "lucide-react";
import heroImage from "@/assets/hero-course.jpg";

export const CourseHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors">
            <Calendar className="w-4 h-4 mr-2" />
            Cohort-Based Program
          </Badge>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Master{" "}
            <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Full-Stack
            </span>
            <br />
            .NET + Azure + AI
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Build production-ready applications with .NET Core, deploy on Azure, and integrate cutting-edge AI features in our 24-week intensive program.
          </p>
          
          {/* Key Info Cards */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <Clock className="w-5 h-5 text-blue-200" />
              <span className="font-medium">24 Weeks</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <Users className="w-5 h-5 text-purple-200" />
              <span className="font-medium">Small Cohorts</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <Globe className="w-5 h-5 text-green-200" />
              <span className="font-medium">Live Online</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto"
            >
              Enroll Now - Early Bird
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              View Curriculum
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-blue-100 mb-4">Trusted by developers at</p>
            <div className="flex flex-wrap justify-center gap-8 text-white/60 text-sm font-medium">
              <span>Microsoft</span>
              <span>Amazon</span>
              <span>Google</span>
              <span>Startups</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};