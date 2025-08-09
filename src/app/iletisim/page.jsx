"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { saveContactMessage } from "@/utils/firebaseOperations";

// Çeviri verileri
const translations = {
  tr: {
    heroTitlePart1: "İletişime",
    heroTitlePart2: " Geçin",
    heroSubtitle: "Projeleriniz için bizimle iletişime geçin",
    contactFormTitle: "Bize Ulaşın",
    formNameLabel: "Adınız Soyadınız",
    formEmailLabel: "E-posta Adresiniz",
    formPhoneLabel: "Telefon Numaranız",
    formSubjectLabel: "Konu",
    formMessageLabel: "Mesajınız",
    formSubmitButton: "Gönder",
    contactInfoTitle: "İletişim Bilgileri",
    addressTitle: "Adres",
    addressContent: "İstanbul/Üsküdar",
    phoneTitle: "Telefon",
    phoneContent: "+90 554 141 8852",
    emailTitle: "E-posta",
    emailContent: "info@bayronix.com",
    formNamePlaceholder: "Adınız Soyadınız",
    formEmailPlaceholder: "E-posta Adresiniz",
    formPhonePlaceholder: "Telefon Numaranız",
    formSubjectPlaceholder: "Konu",
    formMessagePlaceholder: "Mesajınız",
    language: "Dil",
    turkish: "Türkçe",
    english: "İngilizce",
    arabic: "Arapça",
    officeHours: "Çalışma Saatleri",
    officeHoursContent: "Pazartesi - Cuma: 09:00 - 18:00",
    ctaTitle: "Projeleriniz İçin Teknoloji Çözüm Ortağınız",
    ctaDescription: "Bayronix ile teknoloji projelerinizi hayata geçirin. Size özel çözümler için hemen iletişime geçin.",
    callNow: "Hemen Arayın",
    sendEmail: "E-posta Gönderin",
  },
  en: {
    heroTitlePart1: "Get In",
    heroTitlePart2: " Touch",
    heroSubtitle: "Contact us for your projects",
    contactFormTitle: "Contact Us",
    formNameLabel: "Full Name",
    formEmailLabel: "Your Email",
    formPhoneLabel: "Your Phone Number",
    formSubjectLabel: "Subject",
    formMessageLabel: "Your Message",
    formSubmitButton: "Send",
    contactInfoTitle: "Contact Information",
    addressTitle: "Address",
    addressContent: "İstanbul/Üsküdar",
    phoneTitle: "Phone",
    phoneContent: "+90 554 141 8852",
    emailTitle: "Email",
    emailContent: "info@bayronix.com",
    formNamePlaceholder: "Full Name",
    formEmailPlaceholder: "Your Email",
    formPhonePlaceholder: "Your Phone Number",
    formSubjectPlaceholder: "Subject",
    formMessagePlaceholder: "Your Message",
    language: "Language",
    turkish: "Turkish",
    english: "English",
    arabic: "Arabic",
    officeHours: "Office Hours",
    officeHoursContent: "Monday - Friday: 09:00 - 18:00",
    ctaTitle: "Your Technology Partner for Projects",
    ctaDescription: "Bring your technology projects to life with Bayronix. Contact us now for customized solutions.",
    callNow: "Call Now",
    sendEmail: "Send Email",
  },
  ar: {
    heroTitlePart1: "تواصل",
    heroTitlePart2: " معنا",
    heroSubtitle: "تواصل معنا لمشاريعك",
    contactFormTitle: "اتصل بنا",
    formNameLabel: "الاسم الكامل",
    formEmailLabel: "بريدك الإلكتروني",
    formPhoneLabel: "رقم هاتفك",
    formSubjectLabel: "الموضوع",
    formMessageLabel: "رسالتك",
    formSubmitButton: "إرسال",
    contactInfoTitle: "معلومات الاتصال",
    addressTitle: "العنوان",
    addressContent: "اسطنبول/أوسكودار",
    phoneTitle: "هاتف",
    phoneContent: "+90 554 141 8852",
    emailTitle: "بريد إلكتروني",
    emailContent: "info@bayronix.com",
    formNamePlaceholder: "الاسم الكامل",
    formEmailPlaceholder: "بريدك الإلكتروني",
    formPhonePlaceholder: "رقم هاتفك",
    formSubjectPlaceholder: "الموضوع",
    formMessagePlaceholder: "رسالتك",
    language: "اللغة",
    turkish: "التركية",
    english: "الإنجليزية",
    arabic: "العربية",
    officeHours: "ساعات العمل",
    officeHoursContent: "الاثنين - الجمعة: 09:00 - 18:00",
    ctaTitle: "شريكك التكنولوجي لمشاريعك",
    ctaDescription: "حقق مشاريعك التكنولوجية مع بايرونيكس. تواصل معنا الآن للحصول على حلول مخصصة.",
    callNow: "اتصل الآن",
    sendEmail: "أرسل بريدًا إلكترونيًا",
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [currentLang, setCurrentLang] = useState("tr"); // Varsayılan dil Türkçe
  const [formSubmitted, setFormSubmitted] = useState(false);

  const t = translations[currentLang]; // Seçilen dile göre çevirileri alır

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Add timestamp to the form data
      const messageData = {
        ...formData,
        timestamp: new Date().toISOString(),
        read: false
      };
      
      // Save message to Firebase
      const { id, error } = await saveContactMessage(messageData);
      
      if (error) {
        console.error("Error saving message:", error);
        return;
      }
      
      // Form gönderildi bildirimi göster
      setFormSubmitted(true);
      
      // Formu sıfırla
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      
      // 5 saniye sonra bildirimi kaldır
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
  };

  const contactInfo = [
    {
      title: t.addressTitle,
      content: t.addressContent,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: t.phoneTitle,
      content: t.phoneContent,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: t.emailTitle,
      content: t.emailContent,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: t.officeHours,
      content: t.officeHoursContent,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/contact/contact-hero.jpg"
            alt="Contact Office"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/70"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {t.heroTitlePart1}
                <span className="text-blue-400">{t.heroTitlePart2}</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200">
                {t.heroSubtitle}
              </p>
              {/* Language Switcher */}
              <div className="mt-6 flex justify-center space-x-3">
                <button
                  onClick={() => handleLanguageChange("tr")}
                  className={`px-3 py-2 rounded-lg font-medium ${currentLang === "tr" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-200 hover:bg-gray-600"}`}
                >
                  {t.turkish}
                </button>
                <button
                  onClick={() => handleLanguageChange("en")}
                  className={`px-3 py-2 rounded-lg font-medium ${currentLang === "en" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-200 hover:bg-gray-600"}`}
                >
                  {t.english}
                </button>
                <button
                  onClick={() => handleLanguageChange("ar")}
                  className={`px-3 py-2 rounded-lg font-medium ${currentLang === "ar" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-200 hover:bg-gray-600"}`}
                >
                  {t.arabic}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-6 lg:p-8"
              >
                <h2 className="text-3xl font-bold mb-6 text-blue-600">{t.contactFormTitle}</h2>
                
                {formSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg"
                  >
                    Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t.formNameLabel}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder={t.formNamePlaceholder}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t.formEmailLabel}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder={t.formEmailPlaceholder}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t.formPhoneLabel}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder={t.formPhonePlaceholder}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t.formSubjectLabel}
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder={t.formSubjectPlaceholder}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t.formMessageLabel}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder={t.formMessagePlaceholder}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    {t.formSubmitButton}
                  </button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-xl p-6 lg:p-8"
                >
                  <h2 className="text-3xl font-bold mb-6 text-blue-600">{t.contactInfoTitle}</h2>
                  <div className="space-y-5">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {info.title}
                          </h3>
                          <p className="text-gray-600 whitespace-pre-line">
                            {info.content}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

               

                {/* Map */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className="relative h-56 w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.275583369123!2d29.0275!3d41.0082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e7a7777c43%3A0x4c76cf3dcc8b330b!2zVMO8cmtpeWUsIDM0NzE2IMSwem1pdC_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1703123456789"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Bayronix Office Location - Üsküdar, İstanbul"
                      className="rounded-2xl"
                    ></iframe>
                  
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/contact/contact-bg.jpg"
            alt="Contact Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t.ctaTitle}
              </h2>
              <p className="text-lg md:text-xl text-gray-200 mb-6">
                {t.ctaDescription}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+905541418852"
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {t.callNow}
                </a>
                <a
                  href="mailto:info@bayronix.com"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold border border-white hover:bg-blue-700 transition-colors"
                >
                  {t.sendEmail}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 