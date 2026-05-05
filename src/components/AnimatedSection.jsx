"use client";

import { motion } from "framer-motion";

export default function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0,
  animation = "fadeUp" 
}) {
  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: "easeOut" } }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.6, delay, ease: "easeOut" } }
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay, ease: "easeOut" } }
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants[animation]}
    >
      {children}
    </motion.div>
  );
}
