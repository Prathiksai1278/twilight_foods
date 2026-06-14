"use client";

import { AnimatePresence, motion } from "framer-motion";

const stars = ["✦", "✧", "⋆", "✶", "✷"];

export default function MoonParticles({
  show,
  color,
}: {
  show: boolean;
  color: string;
}) {
  return (
    <AnimatePresence>
      {show && (
        <div className="absolute left-1/2 top-1/2 pointer-events-none z-50">
          {Array.from({ length: 14 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 1,
                scale: 0.4,
                x: 0,
                y: 0,
                rotate: 0,
              }}
              animate={{
                opacity: 0,
                scale: 1.4,
                x: (Math.random() - 0.5) * 120,
                y: (Math.random() - 0.2) * 120,
                rotate: 360,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="absolute"
              style={{
                color,
                fontSize: `${14 + Math.random() * 10}px`,
                filter: `drop-shadow(0 0 10px ${color})`,
              }}
            >
              {stars[Math.floor(Math.random() * stars.length)]}
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}