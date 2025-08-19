"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const newsItems = [
    {
      id: 1,
      title: "Natron Opens New Office",
      category: "Company News",
      date: "March 15, 2024",
      image: "/img/news/office.jpg",
      description: "We have moved to our new office with our growing team. We will continue to produce more efficient projects in our modern and spacious workspace.",
      link: "/haberler/natron-opens-new-office"
    },
    {
      id: 2,
      title: "New Technology Partnership",
      category: "Partnerships",
      date: "March 10, 2024",
      image: "/img/news/partnership.jpg",
      description: "We are pleased to announce our strategic business partnership with a global technology giant. Through this collaboration, we will offer more comprehensive solutions to our customers.",
      link: "/haberler/new-technology-partnership"
    },
    {
      id: 3,
      title: "Launch of Our New Software Solution",
      category: "Product News",
      date: "March 5, 2024",
      image: "/img/news/software.jpg",
      description: "We are proud to introduce our new software solution developed in line with our customers' needs.",
      link: "/haberler/launch-of-our-new-software-solution"
    },
    {
      id: 4,
      title: "Team is Growing",
      category: "Company News",
      date: "March 1, 2024",
      image: "/img/news/team.jpg",
      description: "New experts have joined our team with our new projects and growing customer portfolio. We will sign bigger projects with our strong staff.",
      link: "/haberler/team-is-growing"
    },
    {
      id: 5,
      title: "Our Industry Award",
      category: "Achievements",
      date: "February 25, 2024",
      image: "/img/news/award.jpg",
      description: "We are proud to win the Best Software Company of the Year award. This success is an indicator of our commitment to our customers.",
      link: "/haberler/our-industry-award"
    },
    {
      id: 6,
      title: "New Training Program",
      category: "Education",
      date: "February 20, 2024",
      image: "/img/news/training.jpg",
      description: "We are pleased to share the details of our training program launched to support young software developers.",
      link: "/haberler/new-training-program"
    }
  ];

  const categories = [
    "All",
    "Company News",
    "Partnerships",
    "Product News",
    "Achievements",
    "Education"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const filteredNewsItems = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/news/news-hero.jpg"
            alt="Natron News"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                News
                <span className="text-blue-400"> & Updates</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Latest developments and current news from Natron
              </p>
              <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 pb-0">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search news..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-4 pr-10 py-3 border-0 rounded-xl bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-xl transition-all duration-300 text-gray-900 placeholder-gray-500 text-sm"
            />
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  category === activeCategory
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "bg-white text-gray-600 hover:bg-gray-50 hover:shadow-md border border-gray-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-transparent relative">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full -translate-y-48 translate-x-48 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-100 rounded-full translate-y-32 -translate-x-32 opacity-20"></div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={filteredNewsItems.length > 0 ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredNewsItems.length > 0 ? (
              filteredNewsItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2"
                >
                  <Link href={item.link} className="block group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-blue-600/90 backdrop-blur text-white rounded-full text-xs font-medium shadow-lg">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-gray-500 text-sm font-medium">{item.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        Read More
                        <svg
                          className="w-5 h-5 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center text-gray-600 py-16"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">No News Found</h3>
                <p className="text-gray-500">No news matching your search criteria was found.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/news/newsletter-bg.jpg"
            alt="Newsletter Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center text-white"
          >
            <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold mb-4">Stay Updated with Latest News</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Subscribe to our newsletter to not miss our latest news and announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default NewsPage; 