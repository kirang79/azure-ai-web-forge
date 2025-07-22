import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Code, Database, Cloud, Brain, Shield, Rocket, GitBranch, Monitor } from "lucide-react";

export const CourseCurriculum = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Foundations",
      weeks: "Weeks 1-6",
      description: "Master C# and .NET Core fundamentals",
      icon: Code,
      color: "bg-blue-500",
      modules: [
        "C# Advanced Concepts & LINQ",
        "ASP.NET Core Web APIs",
        "Entity Framework Core",
        "Dependency Injection & Clean Architecture",
        "Unit Testing with xUnit",
        "RESTful API Design Principles"
      ]
    },
    {
      phase: "Phase 2", 
      title: "Database & Backend",
      weeks: "Weeks 7-12",
      description: "Deep dive into data management and backend services",
      icon: Database,
      color: "bg-purple-500",
      modules: [
        "SQL Server Advanced Queries",
        "Database Design & Normalization",
        "Entity Framework Migrations",
        "Repository & Unit of Work Patterns",
        "Caching with Redis",
        "Background Services & Hangfire"
      ]
    },
    {
      phase: "Phase 3",
      title: "Azure Cloud",
      weeks: "Weeks 13-18",
      description: "Deploy and scale applications on Microsoft Azure",
      icon: Cloud,
      color: "bg-blue-600",
      modules: [
        "Azure App Service & Functions",
        "Azure SQL Database",
        "Blob Storage & CDN",
        "Application Insights & Monitoring",
        "Azure DevOps Pipelines",
        "Infrastructure as Code with ARM"
      ]
    },
    {
      phase: "Phase 4",
      title: "AI Integration",
      weeks: "Weeks 19-24",
      description: "Add intelligent features with Azure AI services",
      icon: Brain,
      color: "bg-green-500",
      modules: [
        "Azure OpenAI Integration",
        "Cognitive Services APIs",
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision Implementation",
        "AI Ethics & Best Practices"
      ]
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment processing",
      tech: ["ASP.NET Core", "Entity Framework", "SQL Server", "Stripe API"]
    },
    {
      title: "Task Management SaaS",
      description: "Multi-tenant application with real-time features",
      tech: ["SignalR", "Azure Functions", "CosmosDB", "Azure AD"]
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Business intelligence app with predictive insights",
      tech: ["Azure OpenAI", "Power BI", "ML.NET", "Azure Cognitive Services"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
            24-Week Journey
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Complete Curriculum
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Structured learning path that takes you from .NET fundamentals to building 
            production-ready AI-powered applications on Azure.
          </p>
        </div>

        {/* Phase Timeline */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {phases.map((phase, index) => (
            <Card 
              key={phase.phase}
              className="group hover:shadow-elevated transition-all duration-300 border-0 shadow-card"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${phase.color} text-white`}>
                    <phase.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2">{phase.weeks}</Badge>
                    <CardTitle className="text-xl font-semibold">{phase.title}</CardTitle>
                  </div>
                </div>
                <p className="text-muted-foreground">{phase.description}</p>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`phase-${index}`} className="border-none">
                    <AccordionTrigger className="hover:no-underline py-2">
                      View Modules ({phase.modules.length})
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
                      <ul className="space-y-2">
                        {phase.modules.map((module, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-accent" />
                            <span className="text-sm">{module}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Capstone Projects */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6 text-foreground">Capstone Projects</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Build three production-ready applications that demonstrate your full-stack expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover:shadow-elevated transition-all duration-300 hover:scale-105 border-0 shadow-card"
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};