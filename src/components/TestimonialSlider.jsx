"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TestimonialSlider() {
  const testimonials = [
    {
      id: 1,
      text: "Bayronix ile çalışmak vizyonumuzu tamamen değiştirdi. Dijital altyapımızı güçlendirerek rakiplerimizin önüne geçmemizi sağladılar.",
      name: "Ahmet Kaya",
      position: "Dijital Dönüşüm Müdürü",
      company: "Nexora Teknoloji",
      avatar: "/img/yorum1.jpg"
    },
    {
      id: 2,
      text: "E-ticaret sitemizin geliştirilmesinde Bayronix'in uzmanlığından faydalandık. Satışlarımız %200 arttı! Müşteri hizmetleri de mükemmel.",
      name: "Buse Korkmaz",
      position: "Kurucu Ortak",
      company: "ModaShop Online",
      avatar: "/img/yorum2.jpg"
    },
    {
      id: 3,
      text: "Mobil uygulamamızı geliştirirken Bayronix ekibi her aşamada bizimle birlikte hareket etti. Sonuç beklentilerimizi aştı.",
      name: "Zeynep Alkan",
      position: "Operasyon Direktörü",
      company: "Logentrix Bilişim",
      avatar: "/img/yorum3.jpg"
    },
    {
      id: 4,
      text: "Dijital dönüşüm sürecimizde Bayronix'in danışmanlık hizmetleri çok değerliydi. İş süreçlerimiz optimize edildi ve verimliliğimiz arttı.",
      name: "Ahmet Tunç",
      position: "Proje Müdürü",
      company: "Yılmaz Lojistik",
      avatar: "/img/yorum4.jpg"
    },
    {
      id: 5,
      text: "Organizasyon yönetimi konusundaki uzmanlıkları sayesinde etkinliklerimiz çok başarılı geçti. Detaycı yaklaşımları takdire şayan.",
      name: "Ece Karahan",
      position: "Etkinlik Koordinatörü",
      company: "Event Pro Organizasyon",
      avatar: "/img/yorum5.jpg"
    },
    {
      id: 6,
      text: "Sistem entegrasyonlarımızda yaşadığımız sorunları hızlıca çözdüler. 7/24 destek hizmetleri sayesinde işlerimiz aksama yaşanmadı.",
      name: "Yusuf Çelik",
      position: "IT Müdürü",
      company: "Arslan Holdings",
      avatar: "/img/yorum6.jpg"
    },
    {
      id: 7,
      text: "Web tasarım projemizde modern ve kullanıcı dostu bir çözüm sundular. Site trafiğimiz %250 arttı ve dönüşüm oranları yükseldi.",
      name: "Ayşe Kaya",
      position: "Ürün Geliştirme Müdürü",
      company: "Arvento Labs",
      avatar: "/img/yorum7.jpg"
    },
    {
      id: 8,
      text: "Bulut çözümleri konusundaki rehberlik hizmetleri işimizi kolaylaştırdı. Altyapı maliyetlerimiz %40 azaldı.",
      name: "Burak Sezer",
      position: "CTO",
      company: "Finyora Systems",
      avatar: "/img/yorum8.jpg"
    },
    {
      id: 9,
      text: "Proje yönetimi süreçlerinde gösterdikleri profesyonellik etkileyiciydi. Her milestone zamanında teslim edildi.",
      name: "Melis Aydın",
      position: "Proje Müdürü",
      company: "Clevora Yazılım",
      avatar: "/img/yorum9.jpg"
    },
    {
        id: 10,
        text: "Bayronix ile çalışmak gerçekten harika bir deneyimdi. Projemizi zamanında ve bütçe dahilinde tamamladılar. Teknik ekipleri çok profesyonel ve çözüm odaklı.",
        name: "Selin Taş",
        position: "CEO",
        company: "ZentraTech",
        avatar: "/img/yorum10.jpg"
      },
      {
        id: 11,
        text: "SEO ve performans reklamcılığı konularında aldığımız destekle dönüşüm oranlarımız ciddi anlamda arttı.",
        name: "Ayşe Gür",
        position: "Pazarlama Müdürü",
        company: "Valtrix Solutions",
        avatar: "/img/yorum11.jpg"
      },
      {
        id: 12, 
        text: "Mobil uygulamamızı geliştirirken Bayronix ekibi her aşamada bizimle birlikte hareket etti. Sonuç beklentilerimizi aştı.",
        name: "Sena Dursun",
        position: "İş Geliştirme Direktörü",
        company: "Modvia Interactive",
        avatar: "/img/yorum12.jpg"
      },
      {
        id: 13,
        text: "Dijital dönüşüm sürecimizde Bayronix'in danışmanlık hizmetleri çok değerliydi. İş süreçlerimiz optimize edildi ve verimliliğimiz arttı.",
        name: "Erkan Demirci",
        position: "Operasyon Müdürü",
        company: "Devlora Tech",
        avatar: "/img/yorum13.jpg"
      },
      {
        id: 14,
        text: "Raporlama sistemlerinde sağladıkları entegrasyonlar sayesinde mali işler departmanımızda büyük kolaylık sağlandı.",
        name: "Nazlı Erel",
        position: "Finans Direktörü",
        company: "Techsenta Global",
        avatar: "/img/yorum14.jpg"
      },
      {
        id: 15,
        text: "Sistem entegrasyonlarımızda yaşadığımız sorunları hızlıca çözdüler. 7/24 destek hizmetleri sayesinde işlerimiz aksama yaşanmadı.",
        name: "Barış Aksoy",
        position: "Yazılım Takım Lideri",
        company: "Altanet Solutions",
        avatar: "/img/yorum15.jpg"
      },
      {
        id: 16,
        text: "Web tasarım projemizde modern ve kullanıcı dostu bir çözüm sundular. Site trafiğimiz %250 arttı ve dönüşüm oranları yükseldi.",
        name: "Hilal Kaplan",
        position: "Kıdemli Proje Yöneticisi",
        company: "Lumeno Teknoloji",
        avatar: "/img/yorum16.jpg"
      },
      {
        id: 17,
        text: "Bulut çözümleri konusundaki rehberlik hizmetleri işimizi kolaylaştırdı. Altyapı maliyetlerimiz %40 azaldı.",
        name: "Onur Tekin",
        position: "UI Developer",
        company: "Brixera Creative",
        avatar: "/img/yorum17.jpg"
      },
      {
        id: 18,
        text: "Proje yönetimi süreçlerinde gösterdikleri profesyonellik etkileyiciydi. Her milestone zamanında teslim edildi.",
        name: "İlayda Şahin",
        position: "Müşteri İlişkileri Müdürü",
        company: "Kodmira Agency",
        avatar: "/img/yorum18.jpg"
      }
  ];

  // Testimonial'ları 3 sütuna böl
  const column1 = testimonials.filter((_, index) => index % 3 === 0);
  const column2 = testimonials.filter((_, index) => index % 3 === 1);
  const column3 = testimonials.filter((_, index) => index % 3 === 2);

  const TestimonialCard = ({ testimonial, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 mb-6 border border-gray-100"
    >
      <div className="mb-4">
        <p className="text-gray-700 leading-relaxed italic">
          "{testimonial.text}"
        </p>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-100 flex-shrink-0">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">
            {testimonial.name}
          </h4>
          <p className="text-blue-600 text-sm font-medium">
            {testimonial.position}
          </p>
          <p className="text-gray-500 text-xs">
            {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );

  const ScrollingColumn = ({ testimonials, direction = "up", duration = 30 }) => (
    <div className="relative h-full overflow-hidden">
      <motion.div
        animate={{
          y: direction === "up" ? [0, -100 * testimonials.length] : [-100 * testimonials.length, 0]
        }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
        }}
        className="space-y-6"
      >
        {/* İlk set */}
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={`first-${testimonial.id}`} testimonial={testimonial} />
        ))}
        {/* Sonsuz döngü için ikinci set */}
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={`second-${testimonial.id}`} testimonial={testimonial} />
        ))}
      </motion.div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Müşterilerimiz <span className="text-blue-600">Ne Diyor?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Başarılı projelerimizde bizimle çalışan müşterilerimizin deneyimleri
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px] relative">
          {/* Sol Sütun - Yukarı kayıyor */}
          <div className="relative">
            <ScrollingColumn testimonials={column1} direction="up" duration={25} />
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-blue-50 via-blue-50/80 to-transparent pointer-events-none z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-50 via-blue-50/80 to-transparent pointer-events-none z-10"></div>
          </div>

          {/* Orta Sütun - Aşağı kayıyor */}
          <div className="relative">
            <ScrollingColumn testimonials={column2} direction="down" duration={30} />
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-blue-50 via-blue-50/80 to-transparent pointer-events-none z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-50 via-blue-50/80 to-transparent pointer-events-none z-10"></div>
          </div>

          {/* Sağ Sütun - Yukarı kayıyor */}
          <div className="relative">
            <ScrollingColumn testimonials={column3} direction="up" duration={35} />
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-blue-50 via-blue-50/80 to-transparent pointer-events-none z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-50 via-blue-50/80 to-transparent pointer-events-none z-10"></div>
          </div>
        </div>

        {/* Statistics Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 