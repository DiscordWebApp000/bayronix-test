"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Working with Natron completely changed our vision. They strengthened our digital infrastructure and helped us get ahead of our competitors.",
      name: "Alexander Smith",
      position: "Digital Transformation Manager",
      company: "Nexora Technology",
      avatar: "/img/yorum1.jpg"
    },
    {
      id: 2,
      text: "We benefited from Natron's expertise in developing our e-commerce site. Our sales increased by 200%! Customer service is also excellent.",
      name: "Emma Johnson",
      position: "Founding Partner",
      company: "ModaShop Online",
      avatar: "/img/yorum2.jpg"
    },
    {
      id: 3,
      text: "While developing our mobile app, the Natron team moved together with us at every stage. The result exceeded our expectations.",
      name: "Michael Chen",
      position: "Operations Director",
      company: "Logentrix IT",
      avatar: "/img/yorum3.jpg"
    },
    {
      id: 4,
      text: "Natron's consulting services were very valuable in our digital transformation process. Our business processes were optimized and our efficiency increased.",
      name: "Sarah Williams",
      position: "Project Manager",
      company: "Yilmaz Logistics",
      avatar: "/img/yorum4.jpg"
    },
    {
      id: 5,
      text: "Thanks to their expertise in organization management, our events were very successful. Their detailed approach is commendable.",
      name: "David Rodriguez",
      position: "Event Coordinator",
      company: "Event Pro Organization",
      avatar: "/img/yorum5.jpg"
    },
    {
      id: 6,
      text: "They quickly solved the problems we experienced in our system integrations. Thanks to their 24/7 support services, our business did not experience any disruption.",
      name: "Jennifer Lee",
      position: "IT Manager",
      company: "Arslan Holdings",
      avatar: "/img/yorum6.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover why leading companies choose Natron
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Quote */}
            <div className="mb-8">
              <svg className="w-12 h-12 text-blue-100 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                "{testimonials[currentIndex].text}"
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-900">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-blue-600 text-sm">
                  {testimonials[currentIndex].position}
                </p>
                <p className="text-gray-500 text-sm">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8 mb-16">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-blue-300 hover:text-blue-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-blue-300 hover:text-blue-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "98%", label: "Satisfaction" },
            { number: "24/7", label: "Support" },
            { number: "5.0", label: "Rating" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 