import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const glowVariants = {
  animate: {
    opacity: [0.4, 1, 0.4],
    scale: [0.97, 1.03, 0.97],
    filter: [
      "drop-shadow(0 0 8px #fff) drop-shadow(0 0 20px #fff)",
      "drop-shadow(0 0 20px #fff) drop-shadow(0 0 50px #ccc)",
      "drop-shadow(0 0 8px #fff) drop-shadow(0 0 20px #fff)",
    ],
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
  },
};

const flickerVariants = {
  animate: {
    opacity: [1, 0.3, 1, 0.7, 1, 0.2, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      times: [0, 0.1, 0.2, 0.5, 0.6, 0.8, 1],
      ease: "linear",
    },
  },
};

const SCREAMER_URLS = [
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
];

export default function Hero() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleScreamer = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = SCREAMER_URLS[Math.floor(Math.random() * SCREAMER_URLS.length)];
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">

      {/* Red full-screen background layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, #3a0000 0%, #1a0000 40%, #000000 100%)",
        }}
      />

      {/* Glowing demon image — centered, behind content */}
      <motion.div
        className="absolute z-10 flex items-center justify-center"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "520px", maxWidth: "90vw" }}
        variants={glowVariants}
        animate="animate"
      >
        <motion.img
          src="https://cdn.poehali.dev/files/13d48fbb-8122-4c31-9866-7cd755263491.jpg"
          alt="demon"
          className="w-full h-auto object-contain"
          style={{ opacity: 0.18 }}
          variants={flickerVariants}
          animate="animate"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 py-20 w-full max-w-2xl">

        {/* MY BIO title */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold tracking-widest mb-12"
          style={{
            color: "#ff1a1a",
            textShadow: "0 0 20px #ff0000, 0 0 60px #cc0000",
            fontFamily: "monospace",
            letterSpacing: "0.2em",
          }}
          variants={flickerVariants}
          animate="animate"
        >
          MY BIO
        </motion.h1>

        {/* Code block */}
        <div
          className="w-full text-left rounded-sm border border-red-900 mb-10"
          style={{
            background: "#0a0a0a",
            fontFamily: "monospace",
            fontSize: "0.95rem",
          }}
        >
          {/* Code header bar */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-red-900" style={{ background: "#111" }}>
            <span className="w-3 h-3 rounded-full bg-red-700 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-800 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-900 inline-block" />
            <span className="ml-3 text-red-700 text-xs">profile.json</span>
          </div>

          <div className="px-6 py-5 text-sm md:text-base leading-8">
            <span className="text-red-600">{"{"}</span>
            <br />
            <span className="ml-4 text-gray-500">// личные данные</span>
            <br />
            <span className="ml-4">
              <span className="text-red-400">"name"</span>
              <span className="text-white">: </span>
              <span className="text-green-400">"scale"</span>
              <span className="text-white">,</span>
            </span>
            <br />
            <span className="ml-4">
              <span className="text-red-400">"status"</span>
              <span className="text-white">: </span>
              <span className="text-green-400">"пострадавший игрок"</span>
              <span className="text-white">,</span>
            </span>
            <br />
            <span className="ml-4">
              <span className="text-red-400">"age"</span>
              <span className="text-white">: </span>
              <span className="text-yellow-400">23</span>
              <span className="text-white">,</span>
            </span>
            <br />
            <span className="ml-4">
              <span className="text-red-400">"location"</span>
              <span className="text-white">: </span>
              <span className="text-green-400">"america"</span>
              <span className="text-white">,</span>
            </span>
            <br />
            <span className="ml-4">
              <span className="text-red-400">"hobby"</span>
              <span className="text-white">: </span>
              <span className="text-green-400">"убийство"</span>
            </span>
            <br />
            <span className="text-red-600">{"}"}</span>
          </div>
        </div>

        {/* Мирный */}
        <motion.p
          className="text-2xl md:text-3xl font-mono tracking-[0.4em] uppercase mb-12"
          style={{ color: "#ff3333", textShadow: "0 0 10px #ff0000" }}
          variants={flickerVariants}
          animate="animate"
        >
          мирный
        </motion.p>

        {/* Social links — скримеры */}
        <div className="flex gap-6">
          <motion.a
            href="#"
            onClick={handleScreamer}
            className="px-6 py-3 border border-red-800 font-mono text-sm uppercase tracking-widest transition-all duration-300"
            style={{ color: "#ff3333" }}
            whileHover={{ borderColor: "#ff0000", color: "#fff", textShadow: "0 0 10px #ff0000", backgroundColor: "#1a0000" }}
          >
            VK
          </motion.a>
          <motion.a
            href="#"
            onClick={handleScreamer}
            className="px-6 py-3 border border-red-800 font-mono text-sm uppercase tracking-widest transition-all duration-300"
            style={{ color: "#ff3333" }}
            whileHover={{ borderColor: "#ff0000", color: "#fff", textShadow: "0 0 10px #ff0000", backgroundColor: "#1a0000" }}
          >
            Telegram
          </motion.a>
        </div>
      </div>
    </div>
  );
}
