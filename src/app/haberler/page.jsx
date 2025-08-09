"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const newsItems = [
    {
      id: 1,
      title: "Bayronix, Yeni Ofisini Açtı",
      category: "Şirket Haberleri",
      date: "15 Mart 2024",
      image: "/img/news/office.jpg",
      description: "Büyüyen ekibimizle birlikte yeni ofisimize taşındık. Modern ve ferah çalışma alanımızda daha verimli projeler üretmeye devam edeceğiz.",
      link: "/haberler/bayronix-yeni-ofisini-acti"
    },
    {
      id: 2,
      title: "Yeni Teknoloji Partnerliği",
      category: "İş Ortaklıkları",
      date: "10 Mart 2024",
      image: "/img/news/partnership.jpg",
      description: "Global teknoloji devi ile stratejik iş ortaklığımızı duyurmaktan mutluluk duyuyoruz. Bu iş birliği ile müşterilerimize daha kapsamlı çözümler sunacağız.",
      link: "/haberler/yeni-teknoloji-partnerligi"
    },
    {
      id: 3,
      title: "Yeni Yazılım Çözümümüz Lansmanı",
      category: "Ürün Haberleri",
      date: "5 Mart 2024",
      image: "/img/news/software.jpg",
      description: "Müşterilerimizin ihtiyaçları doğrultusunda geliştirdiğimiz yeni yazılım çözümümüzü tanıtmaktan gurur duyuyoruz.",
      link: "/haberler/yeni-yazilim-cozumumuz-lansmani"
    },
    {
      id: 4,
      title: "Ekip Büyüyor",
      category: "Şirket Haberleri",
      date: "1 Mart 2024",
      image: "/img/news/team.jpg",
      description: "Yeni projelerimiz ve büyüyen müşteri portföyümüz ile ekibimize yeni uzmanlar katıldı. Güçlü kadromuzla daha büyük projelere imza atacağız.",
      link: "/haberler/ekip-buyuyor"
    },
    {
      id: 5,
      title: "Sektör Ödülümüz",
      category: "Başarılar",
      date: "25 Şubat 2024",
      image: "/img/news/award.jpg",
      description: "Yılın En İyi Yazılım Şirketi ödülünü kazanmaktan gurur duyuyoruz. Bu başarı, müşterilerimize olan bağlılığımızın bir göstergesidir.",
      link: "/haberler/sektor-odulumuz"
    },
    {
      id: 6,
      title: "Yeni Eğitim Programı",
      category: "Eğitim",
      date: "20 Şubat 2024",
      image: "/img/news/training.jpg",
      description: "Genç yazılımcıları desteklemek amacıyla başlattığımız eğitim programımızın detaylarını paylaşmaktan mutluluk duyuyoruz.",
      link: "/haberler/yeni-egitim-programi"
    }
  ];

  const categories = [
    "Tümü",
    "Şirket Haberleri",
    "İş Ortaklıkları",
    "Ürün Haberleri",
    "Başarılar",
    "Eğitim"
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
    
    const matchesCategory = activeCategory === "Tümü" || item.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/news/news-hero.jpg"
            alt="Bayronix Haberler"
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
              className="text-white"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Haberler
                <span className="text-blue-400"> ve Duyurular</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Bayronix'ten en son gelişmeler ve güncel haberler
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-6 pb-0">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Haber ara..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-4 pr-10 py-3 border-0 rounded-xl bg-gray-50 focus:outline-none focus:bg-white focus:shadow-lg transition-all duration-300 text-gray-900 placeholder-gray-500 text-sm"
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
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  category === activeCategory
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
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
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <Link href={item.link} className="block group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                          {item.category}
                        </span>
                        <span className="text-gray-500 text-sm">{item.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {item.description}
                      </p>
                      <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                        Devamını Oku
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
                className="col-span-full text-center text-gray-600 py-10"
              >
                Arama kriterlerinize uygun haber bulunamadı.
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
            <h2 className="text-3xl font-bold mb-4">Güncel Haberlerden Haberdar Olun</h2>
            <p className="text-blue-100 mb-8">
              En son haberlerimizi ve duyurularımızı kaçırmamak için bültenimize abone olun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Abone Ol
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default NewsPage; 