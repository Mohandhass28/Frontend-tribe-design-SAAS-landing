"use client";
import Button from "@/components/Button";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import cursorImageYou from "@/assets/images/cursor-you.svg";
import designexample1 from "@/assets/images/design-example-1.png";
import designexample2 from "@/assets/images/design-example-2.png";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: [1] }, { duration: 0.5 }],
      [leftDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);
    leftPointerAnimate([
      [leftPointerScope.current, { opacity: [1] }, { duration: 0.5 }],
      [leftPointerScope.current, { x: -100, y: 0 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
    rightDesignAnimate([
      [
        rightDesignScope.current,
        { opacity: [1] },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);
    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: [1] },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
      [
        rightPointerScope.current,
        { x: 0, y: [0, 20, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
  }, []);
  return (
    <section
      className="py-24 overflow-x-clip"
      style={{
        cursor: "url(" + cursorImageYou.src + "), auto",
      }}
    >
      <div className="container relative">
        <motion.div
          ref={leftDesignScope}
          drag
          dragSnapToOrigin={true}
          initial={{ opacity: 0, x: -100, y: 100 }}
          dragElastic={1}
          className="absolute -left-32 top-16 hidden lg:block"
        >
          <Image
            src={designexample1}
            alt="design example 1"
            draggable={false}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200, y: 100 }}
          ref={leftPointerScope}
          className="absolute left-56 top-96 hidden lg:block"
        >
          <Pointer name="Andrea" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100, y: 100 }}
          ref={rightDesignScope}
          drag
          dragSnapToOrigin={true}
          className="absolute -right-64 -top-16 hidden lg:block"
        >
          <Image
            src={designexample2}
            alt="design example 2"
            draggable={false}
          />
        </motion.div>

        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, x: 275, y: 100 }}
          className="absolute right-80 -top-4 hidden lg:block"
        >
          <Pointer name="Bryan" color="red" />
        </motion.div>
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            💫 $7.5M seed round raised
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 ">
          Impactful design, created effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          Design tools shouldn&apos;t slow you down. Layers combines powerful
          features with an intuitive interface that keeps you in your creative
          flow.
        </p>
        <form className="flex border border-white/15 rounded-full py-2 px-4 mt-8 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 md:flex-1 w-full"
          />
          <Button
            variant="primary"
            className="whitespace-nowrap"
            size="sm"
            type="submit"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
