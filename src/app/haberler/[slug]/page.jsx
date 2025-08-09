"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const NewsDetailPage = () => {
  const params = useParams();
  const slug = params.slug;

  const [searchTerm, setSearchTerm] = useState("");

  // Bu kısım normalde bir API'den gelecek
  const newsData = {
    title: "Spelya, Yeni Ofisini Açtı",
    category: "Şirket Haberleri",
    date: "15 Mart 2024",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlfGVufDB8fDB8fHww",
    content: `
      <p class="mb-4">
        Spelya olarak, büyüyen ekibimiz ve artan projelerimizle birlikte yeni ofisimize taşınmanın mutluluğunu yaşıyoruz. Modern ve ferah çalışma alanımızda, daha verimli projeler üretmeye devam edeceğiz.
      </p>
      
      <h2 class="text-2xl font-semibold mb-4 mt-8">Yeni Ofisimizin Özellikleri</h2>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>500 metrekare açık ofis alanı</li>
        <li>Modern toplantı odaları</li>
        <li>Dinlenme ve sosyalleşme alanları</li>
        <li>Yeşil alan ve teras</li>
        <li>7/24 güvenlik ve teknik destek</li>
      </ul>

      <p class="mb-4">
        Yeni ofisimiz, çalışanlarımızın daha verimli ve keyifli bir ortamda çalışmasını sağlayacak şekilde tasarlandı. Açık ofis konsepti ile ekip içi iletişimi güçlendirirken, özel çalışma alanları ile de odaklanma gerektiren işler için uygun ortamlar oluşturduk.
      </p>

      <h2 class="text-2xl font-semibold mb-4 mt-8">Gelecek Planlarımız</h2>
      <p class="mb-4">
        Yeni ofisimizle birlikte, ekip büyüklüğümüzü iki katına çıkarmayı hedefliyoruz. Özellikle yazılım geliştirme, UI/UX tasarım ve proje yönetimi alanlarında yeni uzmanlar aramıza katılacak.
      </p>

      <p class="mb-4">
        Ayrıca, yeni ofisimizde düzenli olarak teknoloji etkinlikleri ve workshop'lar düzenleyerek, sektöre katkı sağlamaya devam edeceğiz.
      </p>
    `,
    author: {
      name: "Altay Satılmış",
      position: "CEO",
      image: "/img/altay.jpeg"
    },
    relatedNews: [
      {
        title: "Ekip Büyüyor",
        category: "Şirket Haberleri",
        date: "1 Mart 2024",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D",
        link: "/haberler/ekip-buyuyor"
      },
      {
        title: "Yeni Teknoloji Partnerliği",
        category: "İş Ortaklıkları",
        date: "10 Mart 2024",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjBwYXJ0bmVyc2hpcHxlbnwwfHwwfHx8MA%3D%3D",
        link: "/haberler/yeni-teknoloji-partnerligi"
      },
      {
        title: "Yeni Yazılım Çözümümüz Lansmanı",
        category: "Ürün Haberleri",
        date: "5 Mart 2024",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlfGVufDB8fDB8fHww",
        link: "/haberler/yeni-yazilim-cozumumuz-lansmani"
      }
    ]
  };

  // Kategori verisi (geçici olarak burada tanımlandı)
  const categories = [
    "Şirket Haberleri",
    "İş Ortaklıkları",
    "Ürün Haberleri",
    "Başarılar",
    "Eğitim"
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRelatedNews = newsData.relatedNews.filter(news =>
    news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    news.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <Image
          src={newsData.image}
          alt={newsData.title}
          fill
          className="object-cover absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-blue-600 opacity-40"></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-10">{newsData.title}</h1>
            <div className="flex items-center justify-center gap-4 text-blue-100">
              <span className="px-3 py-1 bg-blue-500/30 rounded-full text-sm">
                {newsData.category}
              </span>
              <span>{newsData.date}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Left Column - Main Content (3/4 width) */}
            <div className="lg:col-span-3">
              {/* Featured Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[400px] rounded-xl overflow-hidden mb-12"
              >
                <Image
                  src={newsData.image}
                  alt={newsData.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Article Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: newsData.content }}
              />

              {/* Author Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-12 p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={newsData.author.image}
                      alt={newsData.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{newsData.author.name}</h3>
                    <p className="text-gray-600">{newsData.author.position}</p>
                  </div>
                </div>
              </motion.div>

              {/* Comments Section (Placeholder) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="mt-16 p-6 bg-white rounded-xl shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-6">Yorumlar</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Henüz yorum bulunmamaktadır. İlk yorumu siz yapın!</p>
                  {/* Buraya yorum formu eklenebilir */}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sidebar (1/4 width) */}
            <div className="lg:col-span-1">
              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mb-8 relative"
              >
                <input
                  type="text"
                  placeholder="Haberlerde ara..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                />
                <svg
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </motion.div>

              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="bg-white p-6 rounded-xl shadow-lg mb-8"
              >
                <h2 className="text-2xl font-bold mb-6">Kategoriler</h2>
                <ul className="space-y-3">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        href={`/haberler?category=${encodeURIComponent(category)}`}
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Related News */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-6">Diğer Haberler</h2>
                <div className="space-y-6">
                  {filteredRelatedNews.map((news, index) => (
                    <Link key={index} href={news.link} className="block group">
                      <div className="flex items-start space-x-4">
                        <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                          <Image
                            src={news.image}
                            alt={news.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold leading-tight group-hover:text-blue-600 transition-colors">
                            {news.title}
                          </h3>
                          <p className="text-gray-500 text-sm">{news.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetailPage; 