"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import teamData from '@/data/team.json';
import FAQ from '@/components/FAQ';

export default function TeamPage() {
  const [activeCompany, setActiveCompany] = useState("Tümü");
  const [searchTerm, setSearchTerm] = useState("");

  const companies = [
    "Tümü",
    "Natron",
    "Spelya",
    "Random Bayim",
    "Spokingo",
  ];

  const teamMembers = teamData.members;

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

  // Filter team members based on company and search term
  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCompany = activeCompany === "Tümü" || member.company === activeCompany;
    
    return matchesSearch && matchesCompany;
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCompanyChange = (company) => {
    setActiveCompany(company);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/slider3.jpg"
            alt="Natron Team"
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
                Başarının
                <span className="text-blue-400"> Mimarları</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Tutkulu, deneyimli ve yenilikçi ekibimizle tanışın
              </p>
              <div className="flex gap-4 justify-center">
                <Link
                  href="/iletisim"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Bizimle Çalışın
                </Link>
                <Link
                  href="/hakkimizda"
                  className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  Hakkımızda
                </Link>
              </div>
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
              placeholder="Ekip üyesi ara..."
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

      {/* Companies */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {companies.map((company, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCompanyChange(company)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  company === activeCompany
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {company}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Güçlü <span className="text-blue-600">Ekibimiz</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Farklı uzmanlık alanlarından gelen deneyimli profesyonellerle bir arada
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { number: teamMembers.length, label: "Ekip Üyesi" },
              { number: "50+", label: "Yıl Deneyim" },
              { number: companies.length - 1, label: "Şirket" },
              { number: "100%", label: "Tutku" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={filteredMembers.length > 0 ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member) => (
                <motion.div
                  key={member.id}
                  variants={itemVariants}
                  className="group relative h-[450px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
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
                          >
                            <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
                          </a>
                        )}
                        {member.social.instagram !== "#" && (
                          <a
                            href={member.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                          >
                            <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                          </a>
                        )}
                        <a
                          href={`mailto:${member.social.email}`}
                          className="w-9 h-9 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-300"
                        >
                          <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                        </a>
                      </div>
                      
                      <Link href={`/ekibimiz/${member.id}`} className="inline-flex items-center text-white text-sm font-medium group bg-white/10 px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
                        Profili Görüntüle
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center text-gray-600 py-10"
              >
                Arama kriterlerinize uygun ekip üyesi bulunamadı.
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
      <FAQ />

      {/* Join Our Team CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Team Collaboration"
            fill
            className="object-cover scale-105 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/85 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ekibimize Katılmak İster misiniz?
            </h2>
            <p className="text-xl text-gray-100 mb-10">
              Yetenekli ve tutkulu profesyonelleri ekibimizde görmekten mutluluk duyarız. 
              Kariyer fırsatları için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="inline-block px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-lg shadow-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Kariyer Fırsatları
              </Link>
              <Link
                href="/hakkimizda"
                className="inline-block px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Şirket Kültürümüz
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
      </section>
    </main>
  );
} 