'use client';

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  // Refs for scroll animations
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax effect for hero section
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const springHeroY = useSpring(heroY, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Enhanced Hero Section with Parallax */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Animated background gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"
          animate={{
            background: [
              "linear-gradient(to right bottom, rgba(59,130,246,0.2), rgba(147,51,234,0.2), rgba(236,72,153,0.2))",
              "linear-gradient(to right bottom, rgba(236,72,153,0.2), rgba(59,130,246,0.2), rgba(147,51,234,0.2))",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 px-8 py-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <motion.h1 
              className="text-6xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.span 
                className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Faidh Naife
              </motion.span>
              <motion.span 
                className="block text-3xl mt-2 text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Full Stack Developer & Content Creator
              </motion.span>
            </motion.h1>

            {/* Animated typing effect */}
            <TypewriterText texts={[
              "Building the future of web",
              "Creating amazing experiences",
              "Transforming ideas into reality"
            ]} />

            {/* Interactive CTA buttons */}
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147,51,234,0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full"
                whileHover={{ scale: 1.05, borderColor: "#9333EA" }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Animated profile image with floating effect */}
          <motion.div
            style={{ y: springHeroY }}
            className="flex-1 relative"
          >
            <motion.div
              className="relative z-10"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <Image
                src="/your-photo.jpg"
                alt="Faidh Naife"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl"
                priority
              />
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.2, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bento Box Grid Section */}
      <section className="py-20 px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          My Journey
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {/* Large Feature Box */}
          <motion.div
            className="col-span-2 row-span-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl p-8 text-white"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Featured Project</h3>
            <p className="mb-4">Description of your most impressive work</p>
            <Image
              src="/project-preview.jpg"
              alt="Project Preview"
              width={600}
              height={400}
              className="rounded-xl"
            />
          </motion.div>

          {/* Skills Box */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-3xl p-6"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">Skills</h3>
            <div className="space-y-2">
              {["React", "Node.js", "Python"].map((skill) => (
                <motion.div
                  key={skill}
                  className="bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Stats Box */}
          <motion.div
            className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl p-6 text-white"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-2xl font-bold">50+</p>
                <p className="text-sm">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold">5+</p>
                <p className="text-sm">Years Exp.</p>
              </div>
            </div>
          </motion.div>

          {/* Latest Blog Post */}
          <motion.div
            className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl p-6 text-white"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">Latest Post</h3>
            <p className="mb-2">The Future of Web Development</p>
            <a href="#" className="text-white/80 hover:text-white">Read More →</a>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Projects Section with 3D Cards */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated background shapes */}
        <motion.div 
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full"
              animate={{
                x: [Math.random() * 100, Math.random() * -100],
                y: [Math.random() * 100, Math.random() * -100],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </motion.div>

        <div className="max-w-7xl mx-auto px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 3D Project Card Component */}
            <ProjectCard
              title="Project Name"
              description="An innovative solution that revolutionizes..."
              image="/project1.jpg"
              tags={["React", "Node.js", "MongoDB"]}
              link="#"
            />
            {/* Add more project cards */}
          </div>
        </div>
      </section>

      {/* Interactive Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Skills & Expertise
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCategory
              title="Frontend Development"
              skills={[
                { name: "React", level: 90 },
                { name: "Next.js", level: 85 },
                { name: "TypeScript", level: 80 },
              ]}
            />
            {/* Add more skill categories */}
          </div>
        </div>
      </section>
    </div>
  );
}

// Typewriter effect component
const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < texts[currentTextIndex].length) {
          setCurrentText(texts[currentTextIndex].slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        } else {
          setCurrentText(currentText.slice(0, -1));
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts]);

  return (
    <motion.p 
      className="text-xl text-gray-600 dark:text-gray-300 h-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        |
      </motion.span>
    </motion.p>
  );
};

// Project Card Component with 3D effect
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const ProjectCard = ({ title, description, image, tags, link }: ProjectCardProps) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((centerX - x) / centerX) * 10;

    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <motion.a
            href={link}
            className="inline-block text-blue-500 hover:text-blue-600 dark:text-blue-400"
            whileHover={{ x: 5 }}
          >
            View Project →
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

// Skill Category Component with animated progress bars
interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  const progressRef = useRef(null);
  const isInView = useInView(progressRef, { once: true });

  return (
    <motion.div
      ref={progressRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
    >
      <h3 className="text-xl font-bold mb-6">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};