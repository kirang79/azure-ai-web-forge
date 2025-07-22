import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Brain, Database, Shield, Rocket, Users } from "lucide-react";

export const CourseOverview = () => {
  const technologies = [
    {
      icon: Code,
      title: ".NET Core",
      description: "Master modern C# development with .NET 8, Web APIs, Entity Framework, and clean architecture patterns.",
      color: "text-primary"
    },
    {
      icon: Cloud,
      title: "Microsoft Azure",
      description: "Deploy scalable applications using Azure App Service, Functions, SQL Database, and DevOps pipelines.",
      color: "text-blue-500"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Implement AI features using Azure OpenAI, Cognitive Services, and machine learning models in your apps.",
      color: "text-accent"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Work with SQL Server, Azure Cosmos DB, Redis caching, and efficient data access patterns.",
      color: "text-purple-500"
    },
    {
      icon: Shield,
      title: "Security & Auth",
      description: "Implement authentication, authorization, JWT tokens, and security best practices.",
      color: "text-orange-500"
    },
    {
      icon: Rocket,
      title: "Production Deploy",
      description: "CI/CD pipelines, monitoring, logging, performance optimization, and DevOps practices.",
      color: "text-green-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Comprehensive Curriculum
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What You'll Learn
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From backend APIs to cloud deployment and AI integration, master the complete stack 
            that powers modern enterprise applications.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card 
              key={tech.title}
              className="group hover:shadow-elevated transition-all duration-300 hover:scale-105 border-0 shadow-card animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className={`inline-flex p-3 rounded-lg bg-background shadow-sm w-fit mb-4 ${tech.color}`}>
                  <tech.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {tech.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {tech.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Why This Program Works</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-lg">Small Cohorts</h4>
              <p className="text-muted-foreground">
                Limited to 15 students for personalized attention and peer collaboration.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto">
                <Code className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="font-semibold text-lg">Hands-On Projects</h4>
              <p className="text-muted-foreground">
                Build 3 full-stack applications you can showcase to employers.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto">
                <Brain className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold text-lg">Industry Mentors</h4>
              <p className="text-muted-foreground">
                Learn from senior engineers working at top tech companies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};