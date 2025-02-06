"use client";
import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  return (
    <div className="bg-gray-50 text-black font-sans min-h-screen relative overflow-hidden">
      <Head>
        <title>SkillSyncX</title>
        <meta
          name="description"
          content="AI-driven courses, quizzes, and career mentorship"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex justify-between items-center p-6 bg-gray-100 shadow-md sticky top-0 z-50"
      >
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-4xl font-extrabold text-gray-900"
        >
          SkillSyncX
        </motion.h1>
        <nav>
          <ul className="flex space-x-8 text-gray-600 font-medium">
            {["Courses", "Community", "Leaderboard", "Career Path"].map(
              (item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-black transition-all px-3 py-2 rounded-lg"
                  >
                    {item}
                  </a>
                </motion.li>
              )
            )}
          </ul>
        </nav>
      </motion.header>

      {/* Banner Area */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="relative text-center py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold leading-tight text-gray-900 mb-8"
          >
            Transform Your Tech Career
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12"
          >
            Unlock your potential with AI-powered learning, hands-on projects,
            and expert career mentorship. 🚀
          </motion.p>
        </div>
      </motion.section>

      {/* Career Path Section */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Path</h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Join SkillSyncX for AI-powered career growth! Access personalized
          learning, hands-on projects, blockchain-backed certifications, expert
          mentorship, coding challenges, and interview prep to excel in the
          industry.
        </p>
      </section>

      {/* Main Content */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto py-16 px-4"
      >
        {/* Courses Column */}
        <motion.div
          className="bg-white p-4 rounded-xl shadow-lg flex-1" // Reduced padding
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Courses
          </h2>
          <ul className="text-lg text-gray-600 space-y-2">
            <li className="p-2 rounded-lg text-center">Introduction to AI</li>
            <li className="p-2 rounded-lg text-center">
              Web Development Basics
            </li>
            <li className="p-2 rounded-lg text-center">
              Advanced Machine Learning
            </li>
          </ul>
        </motion.div>

        {/* Community Posts Column */}
        <motion.div
          className="bg-white p-4 rounded-xl shadow-lg flex-1" // Reduced padding
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Community
          </h2>
          <ul className="text-lg text-gray-600 space-y-2">
            <li className="p-2 rounded-lg text-center">
              John: Just completed my first AI project!
            </li>
            <li className="p-2 rounded-lg text-center">
              Sarah: Looking for teammates for a hackathon.
            </li>
            <li className="p-2 rounded-lg text-center">
              Mike: Sharing my latest web app.
            </li>
          </ul>
        </motion.div>
      </motion.section>

      {/* Leaderboard Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="text-center py-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Leaderboard</h2>
        <ul className="text-lg text-gray-600 space-y-2">
          <li className="p-2 rounded-lg text-center">1. Alex Johnson</li>
          <li className="p-2 rounded-lg text-center">2. Maria Gonzalez</li>
          <li className="p-2 rounded-lg text-center">3. David Smith</li>
        </ul>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-gray-100 text-center py-8 mt-24"
      >
        <p className="text-gray-600">
          © 2025 SkillSyncX. Empowering the next generation of tech leaders.
        </p>
      </motion.footer>
    </div>
  );
}
