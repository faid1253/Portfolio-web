'use client';

import { motion } from "framer-motion";
import Image from "next/image";

// Add TypeScript interface for TimelineItem props
interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

// Add the type to the TimelineItem component
const TimelineItem = ({ year, title, description }: TimelineItemProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    className="flex gap-4"
  >
    <div className="flex flex-col items-center">
      <div className="w-4 h-4 bg-blue-500 rounded-full" />
      <div className="w-0.5 h-full bg-blue-500/20" />
    </div>
    <div>
      <div className="text-sm text-blue-500 font-bold">{year}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </motion.div>
);

export default function Learn() {
  const learningResources = [
    {
      title: "Technical Skills",
      items: [
        "Full Stack Development",
        "Cloud Architecture",
        "Machine Learning",
        "Mobile Development",
      ],
      icon: "🚀"
    },
    {
      title: "Current Learning Goals",
      items: [
        "Advanced AI Applications",
        "System Design Patterns",
        "Blockchain Technology",
        "Cloud Native Development",
      ],
      icon: "🎯"
    },
    // Add more categories
  ];

  return (
    <main className="min-h-screen pt-16 px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto py-12"
      >
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Learning Journey
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          Exploring the endless possibilities in technology and development
        </p>

        {/* Learning Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningResources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{resource.icon}</div>
              <h2 className="text-2xl font-bold mb-4">{resource.title}</h2>
              <ul className="space-y-2">
                {resource.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (i * 0.1) }}
                    className="flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold mb-8">Learning Timeline</h2>
          <div className="space-y-8">
            {/* Timeline items */}
            <TimelineItem 
              year="2023"
              title="Advanced Web Technologies"
              description="Mastering Next.js 13, TypeScript, and Modern Web Architecture"
            />
            <TimelineItem 
              year="2022"
              title="Cloud Computing"
              description="Deep dive into AWS, Docker, and Kubernetes"
            />
            {/* Add more timeline items */}
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
