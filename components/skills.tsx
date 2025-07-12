"use client";

import { Card, CardContent } from "@/components/ui/card";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Arsenal",
      color: "text-cyan-400",
      borderColor: "border-cyan-400/30",
      skills: [
        { name: "React.js", level: 90, color: "bg-cyan-400" },
        { name: "Next.js", level: 85, color: "bg-cyan-400" },
        { name: "TypeScript", level: 80, color: "bg-cyan-400" },
        { name: "Tailwind CSS", level: 95, color: "bg-cyan-400" },
        { name: "JavaScript", level: 90, color: "bg-cyan-400" },
      ],
    },
    {
      title: "Backend Weapons",
      color: "text-green-400",
      borderColor: "border-green-400/30",
      skills: [
        { name: "Node.js", level: 85, color: "bg-green-400" },
        { name: "Express.js", level: 90, color: "bg-green-400" },
        { name: "MongoDB", level: 80, color: "bg-green-400" },
        { name: "PostgreSQL", level: 75, color: "bg-green-400" },
        { name: "REST APIs", level: 90, color: "bg-green-400" },
      ],
    },
    {
      title: "DevOps Tools",
      color: "text-purple-400",
      borderColor: "border-purple-400/30",
      skills: [
        { name: "Git", level: 85, color: "bg-purple-400" },
        { name: "Vercel", level: 40, color: "bg-purple-400" },
        { name: "Linux", level: 25, color: "bg-purple-400" },
      ],
    },
    {
      title: "Special Abilities",
      color: "text-yellow-400",
      borderColor: "border-yellow-400/30",
      skills: [
        { name: "Problem Solving", level: 95, color: "bg-yellow-400" },
        { name: "Team Collaboration", level: 90, color: "bg-yellow-400" },
        { name: "Code Review", level: 85, color: "bg-yellow-400" },
        { name: "Agile/Scrum", level: 80, color: "bg-yellow-400" },
        { name: "Mentoring", level: 75, color: "bg-yellow-400" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-400 font-mono">
            {"<Skill Tree />"}
          </h2>
          <div className="text-muted-foreground font-mono">
            Character Abilities & Proficiencies
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className={`bg-background/50 backdrop-blur-sm ${category.borderColor}`}
            >
              <CardContent className="p-6">
                <h3
                  className={`text-2xl font-bold mb-6 ${category.color} font-mono`}
                >
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-sm">{skill.name}</span>
                        <span className="font-mono text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-background/50 backdrop-blur-sm border-green-400/30 inline-block">
            <CardContent className="p-6">
              <div className="text-green-400 font-mono text-lg mb-2">
                Overall Power Level
              </div>
              <div className="text-4xl font-bold text-green-400 font-mono mb-4">
                8,500+
              </div>
              <div className="text-sm text-muted-foreground font-mono">
                Continuously leveling up through learning and practice
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
