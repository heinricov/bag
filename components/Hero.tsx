"use client";

import { Button } from "flowbite-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
      <div className="text-center px-4 max-w-4xl">
        <motion.h1
          className="mb-4 lg:mb-10 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="./logo/logo-bg-black.png"
            alt="logo"
            width={1000}
            height={1000}
            className="rounded-sm"
          />
        </motion.h1>
        <motion.p
          className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A powerful Next.js framework with Flowbite React components
        </motion.p>
        <motion.div
          className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            href="/blogs"
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Get started
          </Button>
          <Button href="docs" size="lg" color="gray">
            Learn more
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
