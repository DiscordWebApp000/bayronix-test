"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const References = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'technology', name: 'Teknoloji' },
    { id: 'ecommerce', name: 'E-Ticaret' },
    { id: 'design', name: 'Tasarım' },
    { id: 'marketing', name: 'Pazarlama' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Random Bayim ',
      category: 'ecommerce',
      image: '/img/randombayim1.jpg',
      description: 'E-ticaret platformu',
      size: 'large'
    },
    {
      id: 2,
      title: 'Spelya Yazılım',
      category: 'ecommerce',
      image: '/img/spelya.jpg',
      description: 'Yazılım platformu',
      size: 'medium'
    },
    {
      id: 3,
      title: 'Spokingo',
      category: 'ecommerce',
      image: '/img/spokingo.jpg',
      description: 'Dekarasyon Oyuncak',
      size: 'medium'
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Çalıştığımız Projeler</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Farklı sektörlerde geliştirdiğimiz projeler ve başarı hikayelerimiz
          </p>
        </div>

        {/* Filtreler */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeFilter === category.id 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Proje Grid */}
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => {
                const sizeClasses = {
                  small: 'col-span-1 row-span-1',
                  medium: 'col-span-2 row-span-1',
                  large: 'col-span-2 row-span-2'
                };

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer
                      ${sizeClasses[project.size]}`}
                  >
                    <Link href={`/projeler/${project.id}`} className="block w-full h-full">
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <div className="text-white">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-sm opacity-90">{project.description}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default References; 