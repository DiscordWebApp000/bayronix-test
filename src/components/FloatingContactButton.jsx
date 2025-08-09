"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faTimes,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const buttonVariants = {
    closed: { scale: 1, rotate: 0 },
    open: { scale: 1.1, rotate: 135, transition: { type: "spring", stiffness: 200, damping: 10 } },
  };

  const socialButtonVariants = {
    closed: { opacity: 0, x: 0, y: 0, scale: 0.3 },
    open: (i) => {
      const radius = 120;
      const startAngle = 180;
      const endAngle = 270;
      const angleRange = endAngle - startAngle;
      const numButtons = socialButtons.length;
      const angleStep = numButtons > 1 ? angleRange / (numButtons - 1) : 0;

      const currentAngle = startAngle + i * angleStep;
      const radians = (currentAngle * Math.PI) / 180;

      const x = radius * Math.cos(radians);
      const y = radius * Math.sin(radians);

      return {
        opacity: 1,
        x: x,
        y: y,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 10,
          delay: i * 0.08,
        },
      };
    },
  };

  const socialButtons = [
    { name: "Phone", icon: faPhone, href: "tel:+905541418852" },
    { name: "WhatsApp", icon: faWhatsapp, href: "https://wa.me/905541418852" },
    { name: "Instagram", icon: faInstagram, href: "https://www.instagram.com/spelya_yazilim/" },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-end justify-end">
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-0 right-0 w-16 h-16">
            {socialButtons.map((button, i) => (
              <motion.div
                key={button.name}
                custom={i}
                variants={socialButtonVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <Link href={button.href} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    className="w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center text-2xl hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FontAwesomeIcon icon={button.icon} />
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
      <motion.button
        className="w-16 h-16 rounded-full bg-blue-600 text-white shadow-xl flex items-center justify-center text-4xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 relative z-10"
        variants={buttonVariants}
        animate={isOpen ? "open" : "closed"}
        onClick={toggleOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faCommentDots} />
      </motion.button>
    </div>
  );
};

export default FloatingContactButton; 