"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("terms");

  const sections = {
    terms: {
      title: "Kullanım Koşulları",
      content: [
        {
          title: "1. Genel Hükümler",
          text: "Bu web sitesini kullanarak, aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız. Bu koşulları kabul etmiyorsanız, lütfen siteyi kullanmayınız. Spelya, bu koşulları önceden haber vermeksizin değiştirme hakkını saklı tutar.",
        },
        {
          title: "2. Hizmet Kullanımı",
          text: "Spelya olarak sunduğumuz hizmetleri kullanırken, tüm yasal düzenlemelere ve etik kurallara uymanız gerekmektedir. Hizmetlerimizi kötüye kullanma, sistemlere zarar verme veya başkalarının haklarını ihlal etme durumunda hizmetlerimizi kullanmanız engellenebilir.",
        },
        {
          title: "3. Fikri Mülkiyet",
          text: "Sitede yer alan tüm içerikler, Spelya'nın fikri mülkiyeti altındadır ve izinsiz kullanılamaz. Logo, marka, yazılım, tasarım ve diğer tüm materyaller telif hakkı ile korunmaktadır.",
        },
        {
          title: "4. Kullanıcı Sorumlulukları",
          text: "Kullanıcılar, hesaplarının güvenliğinden ve gizliliğinden sorumludur. Şüpheli bir durum tespit edildiğinde Spelya'yı bilgilendirmek kullanıcıların sorumluluğundadır.",
        },
        {
          title: "5. Hizmet Değişiklikleri",
          text: "Spelya, hizmetlerini önceden haber vermeksizin değiştirme, güncelleme veya sonlandırma hakkını saklı tutar. Bu değişikliklerden kullanıcılar haberdar edilecektir.",
        },
        {
          title: "6. Sorumluluk Sınırları",
          text: "Spelya, hizmetlerinin kesintisiz veya hatasız olacağını garanti etmez. Hizmetlerden kaynaklanan doğrudan veya dolaylı zararlardan sorumlu tutulamaz.",
        },
      ],
    },
    privacy: {
      title: "Gizlilik Politikası",
      content: [
        {
          title: "1. Veri Toplama",
          text: "Kişisel verileriniz, hizmetlerimizi sunabilmek ve geliştirebilmek için güvenli bir şekilde toplanmaktadır. Bu veriler arasında ad-soyad, e-posta adresi, telefon numarası, işletme bilgileri ve kullanım istatistikleri yer alabilir.",
        },
        {
          title: "2. Veri Kullanımı",
          text: "Toplanan veriler, yasal düzenlemelere uygun olarak ve sadece belirtilen amaçlar doğrultusunda kullanılmaktadır. Bu amaçlar arasında hizmet sunumu, müşteri desteği, geliştirme çalışmaları ve yasal yükümlülüklerin yerine getirilmesi bulunmaktadır.",
        },
        {
          title: "3. Veri Güvenliği",
          text: "Verilerinizin güvenliği için en son teknolojik önlemler alınmaktadır. SSL şifreleme, güvenlik duvarları, düzenli güvenlik güncellemeleri ve erişim kontrolü gibi önlemler uygulanmaktadır.",
        },
        {
          title: "4. Veri Paylaşımı",
          text: "Kişisel verileriniz, yasal zorunluluklar dışında üçüncü taraflarla paylaşılmamaktadır. Hizmet sağlayıcılarımızla yapılan paylaşımlar, veri güvenliği sözleşmeleri kapsamında gerçekleştirilmektedir.",
        },
        {
          title: "5. Veri Saklama",
          text: "Verileriniz, hizmet sunumu için gerekli olduğu sürece saklanmaktadır. Yasal saklama süreleri dolduğunda veya verilerinize artık ihtiyaç kalmadığında, güvenli bir şekilde silinmektedir.",
        },
        {
          title: "6. Kullanıcı Hakları",
          text: "KVKK kapsamında, verilerinize erişim, düzeltme, silme ve işlemeyi kısıtlama haklarına sahipsiniz. Bu haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.",
        },
      ],
    },
    cookies: {
      title: "Çerez Politikası",
      content: [
        {
          title: "1. Çerez Kullanımı",
          text: "Sitemizde kullanılan çerezler, kullanıcı deneyimini iyileştirmek, site performansını artırmak ve güvenliği sağlamak için kullanılmaktadır. Çerezler, tarayıcınız aracılığıyla cihazınıza kaydedilen küçük metin dosyalarıdır.",
        },
        {
          title: "2. Çerez Türleri",
          text: "Zorunlu çerezler: Sitenin temel işlevleri için gereklidir. Performans çerezleri: Site kullanımını analiz etmek için kullanılır. Fonksiyonel çerezler: Kullanıcı tercihlerini hatırlamak için kullanılır. Hedefleme çerezleri: Kişiselleştirilmiş içerik sunmak için kullanılır.",
        },
        {
          title: "3. Çerez Yönetimi",
          text: "Tarayıcı ayarlarınızdan çerez tercihlerinizi yönetebilirsiniz. Ancak, bazı çerezleri devre dışı bırakmanız durumunda sitenin bazı özellikleri düzgün çalışmayabilir.",
        },
        {
          title: "4. Üçüncü Taraf Çerezleri",
          text: "Sitemizde Google Analytics, Facebook Pixel gibi üçüncü taraf hizmetlerin çerezleri de kullanılmaktadır. Bu çerezler, site kullanımını analiz etmek ve reklam deneyimini kişiselleştirmek için kullanılmaktadır.",
        },
        {
          title: "5. Çerez Güvenliği",
          text: "Kullandığımız çerezler güvenli ve şifrelidir. Çerezler aracılığıyla toplanan veriler, gizlilik politikamız kapsamında korunmaktadır.",
        },
        {
          title: "6. Çerez Tercihleri",
          text: "Sitemizi ilk ziyaretinizde, çerez kullanımı hakkında bilgilendirilecek ve tercihlerinizi belirleyebileceksiniz. Bu tercihlerinizi daha sonra değiştirebilirsiniz.",
        },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlfGVufDB8fDB8fHww"
            alt="Terms and Conditions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Kullanım Koşulları
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Spelya'nın kullanım koşulları ve politikaları
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Sidebar Navigation */}
            <div className="md:w-1/4">
              <div className="sticky top-32 bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">İçindekiler</h3>
                <nav className="space-y-4">
                  {Object.entries(sections).map(([key, section]) => (
                    <button
                      key={key}
                      onClick={() => setActiveSection(key)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                        activeSection === key
                          ? "bg-blue-600 text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:w-3/4">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {sections[activeSection].title}
                </h2>
                <div className="space-y-8">
                  {sections[activeSection].content.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    
    </main>
  );
} 