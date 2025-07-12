"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack MERN e-commerce application with payment integration, admin dashboard, and real-time inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
      difficulty: "Boss Level",
      status: "Completed",
      stars: 5,
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Real-time social media analytics dashboard with data visualization, user engagement metrics, and automated reporting.",
      technologies: ["Next.js", "Express", "PostgreSQL", "Chart.js", "Redis"],
      difficulty: "Elite",
      status: "Completed",
      stars: 4,
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative project management tool with real-time updates, team collaboration features, and advanced filtering.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
      difficulty: "Advanced",
      status: "Completed",
      stars: 4,
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "AI Chat Application",
      description:
        "Intelligent chatbot application with natural language processing, context awareness, and multi-language support.",
      technologies: ["React", "Python", "OpenAI", "WebSocket", "Docker"],
      difficulty: "Legendary",
      status: "In Progress",
      stars: 5,
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=400",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Boss Level":
        return "text-red-400 border-red-400/30 bg-red-400/10";
      case "Legendary":
        return "text-purple-400 border-purple-400/30 bg-purple-400/10";
      case "Elite":
        return "text-yellow-400 border-yellow-400/30 bg-yellow-400/10";
      case "Advanced":
        return "text-blue-400 border-blue-400/30 bg-blue-400/10";
      default:
        return "text-green-400 border-green-400/30 bg-green-400/10";
    }
  };

  const getStatusColor = (status: string) => {
    return status === "Completed"
      ? "text-green-400 border-green-400/30 bg-green-400/10"
      : "text-orange-400 border-orange-400/30 bg-orange-400/10";
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-400 font-mono">
            {"<Quest Log />"}
          </h2>
          <div className="text-muted-foreground font-mono">
            Completed Missions & Current Adventures
          </div>
          <CardTitle className="text-xl font-bold align-center text-green-400 font-mono group-hover:text-green-300 transition-colors">
            Updating Soon
          </CardTitle>
        </div>

        {/* <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-background/50 backdrop-blur-sm border-green-400/30 hover:border-green-400/50 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <CardTitle className="text-xl font-bold text-green-400 font-mono group-hover:text-green-300 transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex gap-1">
                    {[...Array(project.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 mb-4">
                  <Badge className={`font-mono text-xs ${getDifficultyColor(project.difficulty)}`}>
                    {project.difficulty}
                  </Badge>
                  <Badge className={`font-mono text-xs ${getStatusColor(project.status)}`}>{project.status}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg border border-green-400/20"
                  />
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs font-mono">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="interactive flex-1 bg-transparent">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="interactive flex-1 bg-green-400 hover:bg-green-500 text-black">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}

        <div className="mt-16 text-center">
          <Card className="bg-background/50 backdrop-blur-sm border-blue-400/30 inline-block">
            <CardContent className="p-6">
              <div className="text-blue-400 font-mono text-lg mb-2">
                Quest Statistics
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400 font-mono">
                    25+
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    Completed
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-400 font-mono">
                    3
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    In Progress
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400 font-mono">
                    ∞
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    Ideas
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
