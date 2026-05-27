"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PageTemplate({
  title,
  subtitle,
  children
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="paper max-w-6xl mx-auto p-8"
    >
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-pink-500 mb-4">{title}</h1>
        <p className="text-lg text-gray-700">{subtitle}</p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="polaroid animate-float">
          <Image
            src="/images/photo1.jpg"
            alt="memory"
            width={260}
            height={260}
            className="rounded-xl object-cover"
          />
          <p className="mt-3 text-center text-pink-500">
            Replace image easily 💖
          </p>
        </div>
      </div>

      {children}
    </motion.div>
  );
}
