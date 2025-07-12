"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:darsh2126gajdhar@gmail.com",
      color: "text-red-400",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Darsh2126",
      color: "text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/darsh-gajdhar/",
      color: "text-blue-400",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/DGajdhar",
      color: "text-cyan-400",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-400 font-mono">
            {"<Contact />"}
          </h2>
          <div className="text-muted-foreground font-mono">
            Ready to start a new quest together?
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-background/50 backdrop-blur-sm border-green-400/30">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-400 font-mono">
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-background/50 border-green-400/30 focus:border-green-400 font-mono"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-background/50 border-green-400/30 focus:border-green-400 font-mono"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-background/50 border-green-400/30 focus:border-green-400 font-mono resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-green-400 hover:bg-green-500 text-black font-bold interactive"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-background/50 backdrop-blur-sm border-blue-400/30">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-400 font-mono mb-4">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Always excited to collaborate on new projects, discuss
                  technology, or just have a chat about the latest in web
                  development. Feel free to reach out through any of these
                  channels!
                </p>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="flex items-center gap-4 p-3 rounded-lg bg-background/30 border border-gray-400/20 hover:border-green-400/50 transition-all duration-300 interactive group"
                    >
                      <link.icon
                        className={`w-5 h-5 ${link.color} group-hover:text-green-400 transition-colors`}
                      />
                      <span className="font-mono text-sm group-hover:text-green-400 transition-colors">
                        {link.label}
                      </span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur-sm border-purple-400/30">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-purple-400 font-mono mb-4">
                  Current Status
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-mono text-sm">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span>Available for new projects</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-sm">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                    <span>Open to collaboration</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-sm">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                    <span>Learning new technologies</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-background/50 backdrop-blur-sm border-green-400/30 inline-block">
            <CardContent className="p-6">
              <div className="text-green-400 font-mono text-lg mb-2">
                {">"} Thanks for visiting my portfolio!
              </div>
              <div className="text-sm text-muted-foreground font-mono">
                Made with ❤️ using React, Next.js & Three.js
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
