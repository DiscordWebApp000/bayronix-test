"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import TestimonialSlider from "@/components/TestimonialSlider";
import teamData from '@/data/team.json';

export default function AboutUsPage() {
  // Filter management team members (first 3 members are management)
  const managementTeam = teamData.members.filter(member => member.department === "Yönetim");

  const milestones = [
    {
      year: "2022",
      title: "Kuruluş Yılı",
      description: "Bayronix'in teknoloji ve inovasyon yolculuğu başladı. İlk ofisimizi açtık ve yazılım sektöründe ilk adımlarımızı attık.",
      achievement: "İlk Yazılım Projesi",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      year: "2023",
      title: "Büyüme ve Genişleme",
      description: "İlk grup şirketlerimizin kuruluşu ve farklı sektörlere açılım. E-ticaret ve teknoloji alanında önemli yatırımlar.",
      achievement: "3 Grup Şirketi",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      year: "2024",
      title: "Teknoloji Atılımı",
      description: "Yapay zeka ve blockchain teknolojilerine yatırım. Ar-Ge merkezimizin kuruluşu ve inovasyon odaklı projelerin başlangıcı.",
      achievement: "4 Sektörde Faaliyet",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      year: "2025",
      title: "Global Vizyon",
      description: "Uluslararası pazarlara açılım ve yeni nesil teknoloji çözümleri. 5 grup şirketiyle farklı sektörlerde lider konuma yükseliş.",
      achievement: "5 Grup Şirketi",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const values = [
    {
      title: "İnovasyon",
      description: "Sürekli yenilik ve gelişim odaklı yaklaşım",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Sürdürülebilirlik",
      description: "Uzun vadeli başarı için sürdürülebilir stratejiler",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: "Müşteri Odaklılık",
      description: "Müşteri memnuniyeti odaklı hizmet anlayışı",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Ekip Ruhu",
      description: "Güçlü takım çalışması ve iş birliği",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/about/about-hero.jpg"
            alt="Bayronix Office"
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
                Geleceği
                <span className="text-blue-400"> İnşa Ediyoruz</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                3 yıllık deneyimimizle, farklı sektörlerde öncü çözümler üretiyoruz
              </p>
              <div className="flex gap-4">
                <Link
                  href="/iletisim"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  İletişime Geçin
                </Link>
                <Link
                  href="/hizmetlerimiz"
                  className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  Hizmetlerimiz
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Biz Kimiz Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-50 rounded-full translate-y-32 -translate-x-32"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Biz <span className="text-blue-600">Kimiz?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Bayronix Holding, 2022 yılında kurulan ve farklı sektörlerde faaliyet gösteren 
                güçlü bir holding şirketidir. Teknoloji, e-ticaret, organizasyon ve danışmanlık 
                alanlarında uzmanlaşmış 5 grup şirketimizle müşterilerimize kapsamlı çözümler sunuyoruz.
              </p>
              
              {/* Mission Points */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">İnovasyon ve teknoloji odaklı çözümler geliştiriyoruz</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Müşteri memnuniyetini her zaman önceliğimiz olarak görüyoruz</span>
                    </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Sürdürülebilir büyüme ve uzun vadeli ortaklıklar kuruyoruz</span>
                </div>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200/50">
                <div className="text-3xl font-bold text-blue-600 mb-2">2022</div>
                <div className="text-gray-700 font-medium">Kuruluş Yılı</div>
                <div className="text-sm text-gray-500 mt-1">4 yıllık deneyim</div>
                </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl border border-gray-200/50">
                <div className="text-3xl font-bold text-gray-700 mb-2">5</div>
                <div className="text-gray-700 font-medium">Grup Şirketi</div>
                <div className="text-sm text-gray-500 mt-1">Farklı sektörler</div>
                    </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200/50">
                <div className="text-3xl font-bold text-blue-600 mb-2">80+</div>
                <div className="text-gray-700 font-medium">Tamamlanan Proje</div>
                <div className="text-sm text-gray-500 mt-1">Başarılı sonuçlar</div>
                  </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl border border-gray-200/50">
                <div className="text-3xl font-bold text-gray-700 mb-2">3</div>
                <div className="text-gray-700 font-medium">Ana Sektör</div>
                <div className="text-sm text-gray-500 mt-1">Uzmanlık alanları</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Değerlerimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bayronix olarak, başarımızın temelini oluşturan değerlerimiz
            </p>
            </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="text-blue-600 mb-6 transform group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
            </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Yolculuğumuz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              2022'den bugüne teknoloji ve inovasyon odaklı büyüme hikayemiz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                      {milestone.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <div className="text-5xl font-bold text-blue-600/20 absolute -top-8 -left-2 select-none">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{milestone.title}</h3>
                    <p className="text-gray-600 mb-6 line-clamp-4">{milestone.description}</p>
                    
                    {/* Achievement Badge */}
                    <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-600 font-medium text-sm">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      {milestone.achievement}
                    </div>
                  </div>

                  {/* Hover Line Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Yönetim Ekibimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vizyoner liderlerimizle geleceğe yön veriyoruz
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {managementTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-[450px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <Link href={`/ekibimiz/${member.id}`} className="block h-full">
                  {/* Member Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Company Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-sm font-medium shadow-lg">
                      {member.company}
                    </span>
                  </div>
                  
                  {/* Department Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-4 py-1.5 bg-white/80 backdrop-blur-sm text-blue-700 rounded-full text-xs font-medium shadow-lg">
                      {member.department}
                    </span>
                  </div>
                  
                  {/* Basic Info - Always Visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform translate-y-0 group-hover:translate-y-[-100%] transition-transform duration-500 ease-in-out">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-blue-300 font-medium mb-2">{member.position}</p>
                    <div className="w-12 h-1 bg-blue-500 rounded-full mb-4"></div>
                  </div>
                  
                  {/* Extended Info - Visible on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 bg-gradient-to-t from-blue-900/95 to-blue-800/90 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-blue-200 font-medium mb-1">{member.position}</p>
                    <div className="w-12 h-1 bg-blue-500 rounded-full mb-4"></div>
                    
                    <p className="text-white/90 text-sm mb-4 line-clamp-3">
                      {member.shortBio}
                    </p>
                    
                    {/* Expertise */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {member.expertise && member.expertise.slice(0, 2).map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-white/10 text-blue-100 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {/* Social Links and View Profile */}
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-3">
                        {member.social.linkedin !== "#" && (
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                          </a>
                        )}
                        {member.social.instagram !== "#" && (
                          <a
                            href={member.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                            </svg>
                          </a>
                        )}
                        {member.social.email && (
                          <a
                            href={`mailto:${member.social.email}`}
                            className="w-9 h-9 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </a>
                        )}
                      </div>
                      
                      <span className="inline-flex items-center text-white text-sm font-medium group bg-white/10 px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
                        Profili Görüntüle
                        <svg 
                          className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" 
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
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* View All Button */}
          <div className="flex justify-center mt-12">
            <Link 
              href="/ekibimiz" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              Tüm Ekibimizi Görüntüle
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
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSlider />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="relative py-20 bg-blue-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/img/about/about-hero.jpg')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-6"
            >
              Geleceğin İş Dünyasında
              <br />
              Yerinizi Alın
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-blue-100 mb-8"
            >
              Bayronix Holding ile işinizi bir üst seviyeye taşıyın
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
                Hemen İletişime Geçin
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