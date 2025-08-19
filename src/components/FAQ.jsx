"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "What areas do you provide services in?",
      answer: "As Natron, we provide comprehensive services in technology consulting, e-commerce solutions, mobile app development, web design and organization management. We particularly guide companies in digital transformation processes and optimize business processes with modern technologies. Additionally, we help businesses gain competitive advantage through custom software development, system integrations and cloud solutions.",
      icon: "🏢",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      question: "How much experience does your company have?",
      answer: "Natron, which has been operating in the technology sector since 2022, has successfully completed more than 500 projects with its 10 years of solid experience. During this process, we served customers from small-scale startups to large corporate companies. Our team follows continuously evolving technologies and offers the most up-to-date solutions in the sector to our customers. Thanks to our experienced staff, we have become experts in successfully completing even complex projects.",
      icon: "⏱️",
      color: "from-green-500 to-blue-600"
    },
    {
      id: 3,
      question: "What size companies do you work with?",
      answer: "We have experience working with businesses of every scale, from startups to Fortune 500 companies. While we develop cost-effective solutions for small businesses, we carry out comprehensive projects at the corporate level for large companies. Since each of our customers has different needs, we offer customized solutions suitable for their budget and requirements with our flexible approach. Regardless of project size, we adopt the same quality service understanding and prioritize customer satisfaction.",
      icon: "🎯",
      color: "from-pink-500 to-red-600"
    },
    {
      id: 4,
      question: "How does your project development process work?",
      answer: "We carry out our projects in 4 main stages: First, we fully understand the customer's requirements by conducting a detailed needs analysis. In the second stage, we create the project roadmap and timeline in the design and planning process. In the third stage, which is development and testing, we perform coding, integration and quality control processes. In the final stage, we go live with the project and provide post-launch support and training services. We maintain transparent communication with the customer throughout the entire process and get approval at each stage.",
      icon: "⚡",
      color: "from-yellow-500 to-orange-600"
    },
    {
      id: 5,
      question: "Do you provide support after project delivery?",
      answer: "Yes, we provide comprehensive support services after project delivery. Our 7/24 technical support team provides a wide range of support including system maintenance and updates, security patches, performance optimizations and user training. Additionally, we also provide regular reporting, analytics tracking and new feature addition services when needed for the sustainability of projects. We establish long-term partnership relationships with our customers and make updates suitable for changes in business processes.",
      icon: "🛠️",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 6,
      question: "How can I contact you?",
      answer: "We have multiple channels to contact us. You can request free consultation by filling out the detailed information form from our contact page. You can send instant messages from our WhatsApp line, call directly from our phone number, or get detailed information from our email address. In the first meeting, we listen to your project, analyze your needs and offer you the most suitable solution. After receiving your meeting request, we contact you within 24 hours.",
      icon: "💬",
      color: "from-indigo-500 to-blue-600"
    }
  ];

  const currentFaq = faqData.find(faq => faq.id === activeFaq);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Answers to questions you're curious about Natron
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Questions Side */}
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <motion.button
                  key={faq.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveFaq(faq.id)}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                    activeFaq === faq.id
                      ? 'border-blue-500 bg-blue-50 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${faq.color} flex items-center justify-center text-white text-xl flex-shrink-0`}>
                      <span className="text-2xl">{faq.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {faq.question}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          activeFaq === faq.id ? 'bg-blue-500' : 'bg-gray-300'
                        } transition-colors`}>
                          <svg
                            className={`w-4 h-4 text-white transition-transform ${
                              activeFaq === faq.id ? 'rotate-45' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-500">View details</span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Answer Display Side */}
            <div className="lg:sticky lg:top-20">
              <motion.div
                key={activeFaq}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {activeFaq ? (
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 shadow-xl border border-gray-100 min-h-[600px]">
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-red-600/20 rounded-full blur-2xl"></div>
                    
                    <div className="relative z-10">
                      <div className="text-center mb-6">
                        <div className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r ${currentFaq.color} flex items-center justify-center text-white text-3xl mb-4 shadow-lg`}>
                          {currentFaq.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {currentFaq.question}
                        </h3>
                      </div>
                      
                      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50">
                        <p className="text-gray-700 leading-relaxed text-xl">
                          {currentFaq.answer}
                        </p>
                      </div>
                      
                      <div className="mt-6 flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 text-center border border-gray-100">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl mb-6">
                      ❓
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Select a question
                    </h3>
                    <p className="text-gray-600">
                      You can see the detailed answer here by selecting one of the questions on the left.
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 