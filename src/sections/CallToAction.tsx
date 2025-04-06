"use client";
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
  const [scope, animate] = useAnimate();
  const animations = useRef<AnimationPlaybackControls | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    animations.current = animate(
      scope.current,
      { x: "-50%" },
      { duration: 30, ease: "linear", repeat: Infinity }
    );
  }, []);

  useEffect(() => {
    if (animations.current) {
      if (isHovered) {
        animations.current.speed = 0.5;
      } else {
        animations.current.speed = 1;
      }
    }
  }, [isHovered]);

  return (
    <section className="py-24 ">
      <div className="overflow-x-clip p-4 flex group">
        <motion.div
          ref={scope}
          className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-[500]"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <div className="flex items-center gap-16" key={index}>
              <span className="text-lime-400 text-7xl ">&#10038;</span>
              <span className="group-hover:text-lime-400 transition duration-500">
                Try it fot free
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
