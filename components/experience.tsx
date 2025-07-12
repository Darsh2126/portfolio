"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const experiences = [
    {
      title: "MERN Developer",
      company: "Upforce Tech",
      period: "2023 - Present",
      level: "Level 3",
      description:
        "Leading full-stack development projects, mentoring junior developers, and architecting scalable web applications using MERN stack.",
      achievements: [
        "Increased application performance by 40%",
        "Reduced bug reports by 60%",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Postgres"],
      xp: "+2500 XP",
    },
    {
      title: "React Developer",
      company: "Upforce Tech",
      period: "2022 - 2023",
      level: "Level 2",
      description:
        "Developed and maintained multiple client projects, collaborated with cross-functional teams, and implemented modern web technologies.",
      achievements: ["Improved code quality standards"],
      technologies: ["React", "Express", "PostgreSQL", "Git", "Agile"],
      xp: "+1800 XP",
    },
    {
      title: "Junior Web Developer",
      company: "Upforce Tech",
      period: "2022",
      level: "Level 1",
      description:
        "Started journey as a web developer, learned MERN stack fundamentals, and contributed to various client projects.",
      achievements: [
        "Completed 20+ learning modules",
        "Built first full-stack application",
        "Collaborated with design team",
        "Learned version control",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      xp: "+1200 XP",
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Level 3":
        return "text-purple-400 border-purple-400/30 bg-purple-400/10";
      case "Level 2":
        return "text-blue-400 border-blue-400/30 bg-blue-400/10";
      case "Level 1":
        return "text-green-400 border-green-400/30 bg-green-400/10";
      default:
        return "text-gray-400 border-gray-400/30 bg-gray-400/10";
    }
  };

  return (
    <section id="experience" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-400 font-mono">
            {"<Experience Log />"}
          </h2>
          <div className="text-muted-foreground font-mono">
            Career Journey & Level Progression
          </div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-blue-400 to-purple-400 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-green-400 rounded-full border-4 border-background hidden md:block" />

                <Card className="md:ml-16 bg-background/50 backdrop-blur-sm border-green-400/30 hover:border-green-400/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-green-400 font-mono mb-1">
                          {exp.title}
                        </h3>
                        <div className="text-lg text-muted-foreground font-mono mb-2">
                          {exp.company}
                        </div>
                        <div className="text-sm text-muted-foreground font-mono">
                          {exp.period}
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4 md:mt-0">
                        <Badge
                          className={`font-mono text-xs ${getLevelColor(
                            exp.level
                          )}`}
                        >
                          {exp.level}
                        </Badge>
                        <Badge className="font-mono text-xs text-yellow-400 border-yellow-400/30 bg-yellow-400/10">
                          {exp.xp}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-bold text-green-400 font-mono mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-sm text-muted-foreground flex items-center gap-2"
                          >
                            <span className="text-green-400">{">"}</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-blue-400 font-mono mb-2">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs font-mono"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-background/50 backdrop-blur-sm border-green-400/30 inline-block">
            <CardContent className="p-6">
              <div className="text-green-400 font-mono text-lg mb-2">
                Total Experience Points
              </div>
              <div className="text-4xl font-bold text-green-400 font-mono mb-4">
                5,500+ XP
              </div>
              <div className="text-sm text-muted-foreground font-mono">
                Ready for the next level challenge!
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
