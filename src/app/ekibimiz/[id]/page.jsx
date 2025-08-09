"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowLeft, faGraduationCap, faBriefcase, faLightbulb, faBuilding } from '@fortawesome/free-solid-svg-icons';
import teamData from '@/data/team.json';
import { notFound } from "next/navigation";

export default function TeamMemberDetail({ params }) {
  const { id } = params;
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // JSON verisi üzerinden ekip üyesini bul
    const foundMember = teamData.members.find(m => m.id === id);
    
    if (foundMember) {
      setMember(foundMember);
    }
    
    setLoading(false);
  }, [id]);

  // Ekip üyesi bulunamadıysa 404 sayfasına yönlendir
  if (!loading && !member) {
    notFound();
  }

  if (loading || !member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="container mx-auto px-4">
        <Link 
          href="/ekibimiz" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors bg-blue-50 px-4 py-2 rounded-full"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2 w-4 h-4" />
          <span>Tüm Ekip Üyeleri</span>
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
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
            </div>
            
            {/* Social Links */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-4">
              {member.social.linkedin !== "#" && (
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                </a>
              )}
              {member.social.instagram !== "#" && (
                <a
                  href={member.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                </a>
              )}
              <a
                href={`mailto:${member.social.email}`}
                className="w-12 h-12 bg-gray-600 text-white rounded-xl flex items-center justify-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="flex flex-col h-full justify-center">
              <div className="mb-2 text-blue-600 font-medium">{member.department}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{member.name}</h1>
              <div className="text-xl text-blue-700 font-semibold mb-4">{member.position}</div>
              <div className="w-20 h-1.5 bg-blue-500 rounded-full mb-8"></div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {member.fullBio}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="flex items-start bg-blue-50 p-4 rounded-2xl hover:bg-blue-100 transition-colors">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                    <FontAwesomeIcon icon={faGraduationCap} className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Eğitim</div>
                    <div className="font-medium">{member.education}</div>
                  </div>
                </div>
                
                <div className="flex items-start bg-blue-50 p-4 rounded-2xl hover:bg-blue-100 transition-colors">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                    <FontAwesomeIcon icon={faBriefcase} className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Deneyim</div>
                    <div className="font-medium">{member.experience}</div>
                  </div>
                </div>
                
                <div className="flex items-start bg-blue-50 p-4 rounded-2xl hover:bg-blue-100 transition-colors">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                    <FontAwesomeIcon icon={faLightbulb} className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Departman</div>
                    <div className="font-medium">{member.department}</div>
                  </div>
                </div>
                
                <div className="flex items-start bg-blue-50 p-4 rounded-2xl hover:bg-blue-100 transition-colors">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                    <FontAwesomeIcon icon={faBuilding} className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Şirket</div>
                    <div className="font-medium">{member.company}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Expertise Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center mb-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">Uzmanlık Alanları</h2>
            <div className="ml-4 h-1 bg-blue-500 w-20 rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {member.expertise.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                className="bg-blue-50 rounded-xl p-5 hover:bg-blue-100 transition-colors shadow-sm hover:shadow-md"
              >
                <div className="text-blue-600 font-medium">{skill}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center mb-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">Öne Çıkan Projeler</h2>
            <div className="ml-4 h-1 bg-blue-500 w-20 rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {member.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{project}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white text-center shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {member.name} ile İletişime Geçin
          </h2>
          <div className="w-20 h-1 bg-white/30 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Projeleriniz veya sorularınız için {member.name} ile doğrudan iletişime geçebilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${member.social.email}`}
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg shadow-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              E-posta Gönder
            </a>
            <Link
              href="/iletisim"
              className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              İletişim Formu
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 