"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "Hangi alanlarda hizmet veriyorsunuz?",
      answer: "Bayronix olarak teknoloji danışmanlığı, e-ticaret çözümleri, mobil uygulama geliştirme, web tasarım ve organizasyon yönetimi konularında kapsamlı hizmetler sunuyoruz. Özellikle dijital dönüşüm süreçlerinde şirketlere rehberlik ediyor, modern teknolojilerle iş süreçlerini optimize ediyoruz. Ayrıca özel yazılım geliştirme, sistem entegrasyonları ve bulut çözümleri ile işletmelerin rekabet avantajı elde etmelerine yardımcı oluyoruz.",
      icon: "🏢",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      question: "Şirketinizin deneyimi ne kadar?",
      answer: "2022 yılından bu yana teknoloji sektöründe faaliyet gösteren Bayronix, 10 yıllık köklü deneyimi ile 500'den fazla başarılı projeyi hayata geçirmiştir. Bu süreçte küçük ölçekli startup'lardan büyük kurumsal şirketlere kadar geniş bir yelpazede müşteriye hizmet verdik. Ekibimiz sürekli gelişen teknolojileri takip ederek, sektördeki en güncel çözümleri müşterilerimize sunar. Deneyimli kadromuz sayesinde karmaşık projeleri bile başarıyla tamamlama konusunda uzmanlaşmış durumdayız.",
      icon: "⏱️",
      color: "from-green-500 to-blue-600"
    },
    {
      id: 3,
      question: "Hangi büyüklükteki şirketlerle çalışıyorsunuz?",
      answer: "Startup'lardan Fortune 500 şirketlerine kadar her ölçekte işletmeyle çalışma deneyimimiz bulunmaktadır. Küçük girişimler için uygun maliyetli çözümler geliştirirken, büyük şirketler için kurumsal düzeyde kapsamlı projeler yürütüyoruz. Her müşterimizin ihtiyaçları farklı olduğu için esnek yaklaşımımızla, bütçe ve gereksinimlerine uygun özelleştirilmiş çözümler sunuyoruz. Proje büyüklüğü ne olursa olsun, aynı kaliteli hizmet anlayışını benimser ve müşteri memnuniyetini ön planda tutarız.",
      icon: "🎯",
      color: "from-pink-500 to-red-600"
    },
    {
      id: 4,
      question: "Proje geliştirme süreciniz nasıl işler?",
      answer: "Projelerimizi 4 ana aşamada gerçekleştiriyoruz: İlk olarak detaylı ihtiyaç analizi yaparak müşterinin gereksinimlerini tam olarak anlıyoruz. İkinci aşamada tasarım ve planlama sürecinde proje yol haritasını çıkarıyor, zaman çizelgesi oluşturuyoruz. Üçüncü aşama olan geliştirme ve test sürecinde kodlama, entegrasyon ve kalite kontrol işlemlerini gerçekleştiriyoruz. Son aşamada ise projeyi canlıya alıyor, lansman sonrası destek ve eğitim hizmetleri sağlıyoruz. Tüm süreç boyunca müşteriyle şeffaf iletişim halinde kalarak, her aşamada onay alıyoruz.",
      icon: "⚡",
      color: "from-yellow-500 to-orange-600"
    },
    {
      id: 5,
      question: "Proje teslimi sonrası destek veriyor musunuz?",
      answer: "Evet, proje teslimi sonrası kapsamlı destek hizmetleri sunuyoruz. 7/24 teknik destek ekibimiz, sistem bakım ve güncellemeleri, güvenlik yamaları, performans optimizasyonları ve kullanıcı eğitimleri dahil olmak üzere geniş bir destek yelpazesi sağlıyoruz. Ayrıca projelerin sürdürülebilirliği için düzenli raporlama, analitik takip ve gerektiğinde yeni özellik ekleme hizmetleri de veriyoruz. Müşterilerimizle uzun vadeli partnerlik ilişkisi kurarak, iş süreçlerindeki değişimlere uygun güncellemeler yapıyoruz.",
      icon: "🛠️",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 6,
      question: "Nasıl iletişime geçebilirim?",
      answer: "Bizimle iletişime geçmek için birden fazla kanalımız bulunmaktadır. İletişim sayfamızdan detaylı bilgi formunu doldurarak ücretsiz danışmanlık talep edebilirsiniz. WhatsApp hattımızdan anında mesaj gönderebilir, telefon numaramızdan direkt arayabilir veya e-posta adresimizden detaylı bilgi alabilirsiniz. İlk görüşmede projenizi dinliyor, ihtiyaçlarınızı analiz ediyor ve size en uygun çözüm önerisini sunuyoruz. Görüşme talebinizi aldıktan sonra 24 saat içinde sizinle irtibata geçiyoruz.",
      icon: "💬",
      color: "from-indigo-500 to-blue-600"
    }
  ];

  const currentFaq = faqData.find(faq => faq.id === activeFaq);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Sık Sorulan Sorular</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bayronix hakkında merak ettiğiniz soruların yanıtları
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Questions Side */}
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <motion.button
                  key={faq.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveFaq(faq.id)}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                    activeFaq === faq.id
                      ? 'border-blue-500 bg-blue-50 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${faq.color} flex items-center justify-center text-white text-xl flex-shrink-0`}>
                      <span className="text-2xl">{faq.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {faq.question}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          activeFaq === faq.id ? 'bg-blue-500' : 'bg-gray-300'
                        } transition-colors`}>
                          <svg
                            className={`w-4 h-4 text-white transition-transform ${
                              activeFaq === faq.id ? 'rotate-45' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-500">Detayları gör</span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Answer Display Side */}
            <div className="lg:sticky lg:top-20">
              <motion.div
                key={activeFaq}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {activeFaq ? (
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 shadow-xl border border-gray-100 min-h-[600px]">
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-red-600/20 rounded-full blur-2xl"></div>
                    
                    <div className="relative z-10">
                      <div className="text-center mb-6">
                        <div className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r ${currentFaq.color} flex items-center justify-center text-white text-3xl mb-4 shadow-lg`}>
                          {currentFaq.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {currentFaq.question}
                        </h3>
                      </div>
                      
                      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50">
                        <p className="text-gray-700 leading-relaxed text-xl">
                          {currentFaq.answer}
                        </p>
                      </div>
                      
                      <div className="mt-6 flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 text-center border border-gray-100">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl mb-6">
                      ❓
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Bir soru seçin
                    </h3>
                    <p className="text-gray-600">
                      Sol taraftaki sorulardan birini seçerek detaylı cevabını burada görebilirsiniz.
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 