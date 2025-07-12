"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function About() {
  const stats = [
    { label: "Years Experience", value: "3", color: "text-green-400" },
    { label: "Projects Completed", value: "5+", color: "text-blue-400" },
    { label: "Technologies Mastered", value: "15+", color: "text-purple-400" },
    { label: "Tea Consumed", value: "∞", color: "text-yellow-400" },
  ];

  const achievements = [
    {
      title: "Full Stack Warrior",
      description: "Master of MERN Stack",
      unlocked: true,
    },
    {
      title: "Code Ninja",
      description: "Clean Code Practitioner",
      unlocked: true,
    },
    { title: "Bug Hunter", description: "Debugging Expert", unlocked: true },
    {
      title: "Team Player",
      description: "Collaboration Master",
      unlocked: true,
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-400 font-mono">
            {"<About Player />"}
          </h2>
          <div className="text-muted-foreground font-mono">
            Character Stats & Achievements
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-background/50 backdrop-blur-sm border-green-400/30">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-green-400 font-mono">
                Player Info
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A passionate MERN stack developer with 3 years of experience in
                crafting digital experiences. Specialized in building scalable
                web applications using MongoDB, Express.js, React.js, and
                Node.js. Always eager to learn new technologies and tackle
                challenging problems.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-mono text-sm">
                  <span className="text-green-400">{">"}</span>
                  <span>Location: Remote/Global</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-sm">
                  <span className="text-green-400">{">"}</span>
                  <span>Status: Available for new quests</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-sm">
                  <span className="text-green-400">{">"}</span>
                  <span>Specialty: Full Stack Development</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background/50 backdrop-blur-sm border-blue-400/30">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-400 font-mono">
                Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`text-3xl font-bold ${stat.color} font-mono`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-mono">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-background/50 backdrop-blur-sm border-purple-400/30">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-purple-400 font-mono">
              Achievements Unlocked
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-background/30 border border-purple-400/20"
                >
                  <div className="w-12 h-12 rounded-full bg-purple-400/20 flex items-center justify-center">
                    <span className="text-purple-400 text-xl">🏆</span>
                  </div>
                  <div>
                    <div className="font-bold text-purple-400 font-mono">
                      {achievement.title}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.description}
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="ml-auto bg-green-400/20 text-green-400"
                  >
                    Unlocked
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
