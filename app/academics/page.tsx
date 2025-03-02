'use client';

import { motion } from "framer-motion";

export default function Academics () {
  return (
    <main className="min-h-screen pt-16 px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto py-12"
      >
        <h1 className="text-4xl font-bold mb-8">Page Title</h1>
        {/* Add your content here */}
      </motion.div>
    </main>
  );
}