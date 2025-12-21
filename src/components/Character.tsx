"use client";
import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

type Props = {
  sectionId: string;
  lottieUrl?: string;
  position?: "left" | "right";
  size?: number; // px
  alt?: string;
};

export default function Character({
  sectionId,
  lottieUrl,
  position = "right",
  size = 120,
  alt = "character"
}: Props) {
  const [anim, setAnim] = useState<object | null>(null);
  const [visible, setVisible] = useState(false);
  const targetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!lottieUrl) return;
    fetch(lottieUrl)
      .then((r) => r.json())
      .then((data) => setAnim(data))
      .catch(() => setAnim(null));
  }, [lottieUrl]);

  useEffect(() => {
    targetRef.current = document.getElementById(sectionId);
    if (!targetRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => setVisible(e.isIntersecting));
      },
      { threshold: 0.45 }
    );
    obs.observe(targetRef.current);
    return () => obs.disconnect();
  }, [sectionId]);

  const handleClick = () => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  const offsetClass = position === "left" ? "-left-8 md:-left-16" : "-right-8 md:-right-16";

  return (
    <motion.div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`absolute ${offsetClass} top-6 md:top-12 z-40 pointer-events-auto`}
      initial={{ scale: 0.7, opacity: 0, y: 12 }}
      animate={visible ? { scale: 1, opacity: 1, y: 0 } : { scale: 0.8, opacity: 0, y: 8 }}
      transition={{ type: "spring", stiffness: 160, damping: 16 }}
      whileHover={{ scale: 1.06, y: -6 }}
      aria-label={`Jump to ${sectionId}`}>

      <div style={{ width: size, height: size }}> 
        {anim ? (
          <Lottie animationData={anim} loop autoplay style={{ width: "100%", height: "100%" }} />
        ) : (
          <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-400/20 to-indigo-400/10 shadow-md" />
        )}
      </div>
    </motion.div>
  );
}
