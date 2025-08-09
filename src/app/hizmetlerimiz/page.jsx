"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Teknoloji Danışmanlığı",
      description: "İşletmenizin dijital dönüşüm sürecinde stratejik rehberlik sağlıyoruz. Modern teknolojileri kullanarak işinizi geleceğe hazırlıyoruz.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: [
        "Dijital Strateji Geliştirme",
        "Teknoloji Yol Haritası",
        "Süreç Optimizasyonu",
        "İnovasyon Danışmanlığı",
      ],
      image: "/img/services/tech-consulting.jpg",
      benefits: [
        "Rekabet Avantajı",
        "Verimlilik Artışı",
        "Maliyet Optimizasyonu",
        "Sürdürülebilir Büyüme",
      ],
      stats: {
        projects: "50+",
        clients: "30+",
        experience: "10 Yıl",
      }
    },
    {
      id: 2,
      title: "E-Ticaret Çözümleri",
      description: "Modern ve ölçeklenebilir e-ticaret platformları geliştiriyoruz. Satış ve pazarlama süreçlerinizi dijitalleştirerek işinizi büyütmenize yardımcı oluyoruz.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      features: [
        "B2B & B2C Platformları",
        "Ödeme Sistemleri",
        "Stok Yönetimi",
        "Entegrasyon Çözümleri",
      ],
      image: "/img/services/ecommerce.jpg",
      benefits: [
        "7/24 Satış İmkanı",
        "Geniş Müşteri Ağı",
        "Otomatik Süreçler",
        "Analitik Raporlama",
      ],
      stats: {
        projects: "100+",
        clients: "50+",
        experience: "8 Yıl",
      }
    },
    {
      id: 3,
      title: "Organizasyon Yönetimi",
      description: "Etkinlik ve organizasyon süreçlerinizi dijitalleştiriyoruz. Modern yönetim araçları ile operasyonlarınızı optimize ediyoruz.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      features: [
        "Etkinlik Yönetimi",
        "Rezervasyon Sistemleri",
        "Personel Yönetimi",
        "Raporlama Araçları",
      ],
      image: "/img/services/organization.jpg",
      benefits: [
        "Verimli Operasyon",
        "Müşteri Memnuniyeti",
        "Zaman Tasarrufu",
        "Kaynak Optimizasyonu",
      ],
      stats: {
        projects: "200+",
        clients: "100+",
        experience: "12 Yıl",
      }
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/services/tech-consulting.jpg"
            alt="Bayronix Services"
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
                Çözümlerimiz
                <span className="text-blue-400"> ve Hizmetlerimiz</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                İşinizi geleceğe taşıyacak teknoloji ve organizasyon çözümleri
              </p>
              <div className="flex gap-4">
                <Link
                  href="/iletisim"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  İletişime Geçin
                </Link>
                <Link
                  href="#services"
                  className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  Hizmetlerimizi Keşfedin
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Hizmetlerimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Teknoloji, e-ticaret ve organizasyon alanlarında yenilikçi çözümlerle işinizi geleceğe taşıyoruz
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-xl font-bold text-blue-600">{service.stats.projects}</div>
                        <div className="text-xs text-gray-500">Proje</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-blue-600">{service.stats.clients}</div>
                        <div className="text-xs text-gray-500">Müşteri</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-blue-600">{service.stats.experience}</div>
                        <div className="text-xs text-gray-500">Deneyim</div>
                      </div>
                    </div>
                    
                    <Link
                      href={`#service-${service.id}`}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                    >
                      Detaylı Bilgi
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>

                  {/* Hover Line Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={`service-${service.id}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Image Side */}
                  <div className={index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}>
                    <div className="group relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-blue-600/90 backdrop-blur rounded-xl flex items-center justify-center text-white">
                            {service.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                        </div>
                      </div>
                    </div>
                        </div>

                  {/* Content Side */}
                  <div className={index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}>
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                        <p className="text-lg text-gray-600">{service.description}</p>
                      </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Features */}
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">Özellikler</h3>
                            <ul className="space-y-3">
                              {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                <span className="text-gray-700">{feature}</span>
                                </li>
                              ))}
                            </ul>
                        </div>

                        {/* Benefits */}
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">Faydalar</h3>
                          <ul className="space-y-3">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                <span className="text-gray-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                          </div>
                        </div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href="/iletisim"
                          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                        >
                          Teklif Alın
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-blue-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/img/services/tech-consulting.jpg')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-6"
            >
              İşinizi Geleceğe Taşıyalım
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-blue-100 mb-8"
            >
              Bayronix ile teknoloji ve organizasyon çözümlerinizi keşfedin
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
                        >
                Bizimle İletişime Geçin
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
                        </Link>
          </motion.div>
        </div>
        </div>
      </section>
    </main>
  );
} 