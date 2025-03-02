'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  color: string;
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const projects: Project[] = [
    {
      title: "Project Nebula",
      description: "A revolutionary AI-powered platform that transforms ideas into reality",
      tech: ["React", "Node.js", "TensorFlow", "AWS"],
      image: "/images/placeholder-nebula.jpg",
      link: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "EcoTracker",
      description: "Sustainable living app that helps users reduce their carbon footprint",
      tech: ["Vue.js", "Python", "MongoDB", "Docker"],
      image: "/images/placeholder-ecotracker.jpg",
      link: "#",
      color: "from-emerald-500 to-teal-500"
    },
    // Add more projects
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main className="min-h-screen pt-16" ref={containerRef}>
      {/* Hero Section with Parallax */}
      <motion.div 
        style={{ y }}
        className="relative h-[40vh] overflow-hidden flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm" />
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold text-center relative z-10"
        >
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </motion.h1>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              <div className={`
                absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 
                group-hover:opacity-10 transition-opacity duration-300 rounded-xl
              `} />
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                    animate={hoveredIndex === index ? { scale: 1.1 } : { scale: 1 }}
                  >
                    <a
                      href={project.link}
                      className="px-6 py-3 bg-white/90 dark:bg-black/90 rounded-full text-sm font-medium
                        hover:bg-white dark:hover:bg-black transition-colors"
                    >
                      View Project
                    </a>
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-4xl mx-auto px-8 py-20 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Let's collaborate and bring your ideas to life!
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full
            font-medium hover:from-blue-600 hover:to-purple-600 transition-all"
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </main>
  );
}