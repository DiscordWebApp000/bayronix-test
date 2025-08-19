"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Technology Consulting",
      description: "We provide strategic guidance in your business's digital transformation process. We prepare your business for the future using modern technologies.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: [
        "Digital Strategy Development",
        "Technology Roadmap",
        "Process Optimization",
        "Innovation Consulting",
      ],
      image: "/img/services/tech-consulting.jpg",
      benefits: [
        "Competitive Advantage",
        "Efficiency Increase",
        "Cost Optimization",
        "Sustainable Growth",
      ],
      stats: {
        projects: "50+",
        clients: "30+",
        experience: "10 Years",
      }
    },
    {
      id: 2,
      title: "E-Commerce Solutions",
      description: "We develop modern and scalable e-commerce platforms. We help you grow your business by digitizing your sales and marketing processes.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      features: [
        "B2B & B2C Platforms",
        "Payment Systems",
        "Inventory Management",
        "Integration Solutions",
      ],
      image: "/img/services/ecommerce.jpg",
      benefits: [
        "24/7 Sales Opportunity",
        "Wide Customer Network",
        "Automated Processes",
        "Analytics Reporting",
      ],
      stats: {
        projects: "100+",
        clients: "50+",
        experience: "8 Years",
      }
    },
    {
      id: 3,
      title: "Organization Management",
      description: "We digitize your event and organization processes. We optimize your operations with modern management tools.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      features: [
        "Event Management",
        "Reservation Systems",
        "Staff Management",
        "Reporting Tools",
      ],
      image: "/img/services/organization.jpg",
      benefits: [
        "Efficient Operations",
        "Customer Satisfaction",
        "Time Savings",
        "Resource Optimization",
      ],
      stats: {
        projects: "200+",
        clients: "100+",
        experience: "12 Years",
      }
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/services/tech-consulting.jpg"
            alt="Natron Services"
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
                Our Solutions
                <span className="text-blue-400"> & Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Technology and organization solutions that will take your business into the future
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/iletisim"
                  className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Contact Us
                </Link>
                <Link
                  href="#services"
                  className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20"
                >
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-transparent relative">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full -translate-y-48 translate-x-48 opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-100 rounded-full translate-y-32 -translate-x-32 opacity-30"></div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We take your business into the future with innovative solutions in technology, e-commerce and organization
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
                <div className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 h-full border border-gray-100 relative overflow-hidden transform hover:-translate-y-2">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white transform rotate-3 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-3 bg-blue-50 rounded-xl">
                        <div className="text-xl font-bold text-blue-600">{service.stats.projects}</div>
                        <div className="text-xs text-gray-500 font-medium">Projects</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-xl">
                        <div className="text-xl font-bold text-blue-600">{service.stats.clients}</div>
                        <div className="text-xs text-gray-500 font-medium">Clients</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-xl">
                        <div className="text-xl font-bold text-blue-600">{service.stats.experience}</div>
                        <div className="text-xs text-gray-500 font-medium">Experience</div>
                      </div>
                    </div>
                    
                    <Link
                      href={`#service-${service.id}`}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group/link"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* Image Side */}
                  <div className={index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}>
                    <div className="group relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-blue-600/90 backdrop-blur rounded-2xl flex items-center justify-center text-white shadow-lg">
                            {service.icon}
                          </div>
                          <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}>
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">{service.title}</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Features */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Features</h3>
                          </div>
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
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Benefits</h3>
                          </div>
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
                          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                          Get Quote
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
              Let's Take Your Business to the Future
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-blue-100 mb-8"
            >
              Discover your technology and organization solutions with Natron
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Contact Us Now
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