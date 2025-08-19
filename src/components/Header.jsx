'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Don't render header on admin pages
  if (pathname.startsWith('/admin')) {
    return null;
  }

  const darkTextPaths = ['/ekibimiz'];
  
  // Check if we're on a team member detail page or project detail page
  const isTeamMemberPage = pathname.startsWith('/ekibimiz/') && pathname !== '/ekibimiz';
  const isProjectDetailPage = pathname.startsWith('/projeler/') && pathname !== '/projeler';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    return pathname === path;
  };

  // Determine which logo to show based on scroll state and page type
  const logoSrc = isScrolled || isTeamMemberPage || isProjectDetailPage ? "/img/logo-natron.png" : "/img/logo-natron.png";

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={logoSrc}
                alt="Natron Logo"
                width={180}
                height={50}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="md:flex max-md:hidden items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors ${
                isActive("/")
                  ? "text-blue-600 font-bold"
                  : isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : isTeamMemberPage || isProjectDetailPage
                  ? "text-gray-900 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              }`}
            >
              Home
            </Link>
            <Link
              href="/hakkimizda"
              className={`font-medium transition-colors ${
                isActive("/hakkimizda")
                  ? "text-blue-600 font-bold"
                  : isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : isTeamMemberPage || isProjectDetailPage
                  ? "text-gray-900 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              }`}
            >
              About Us
            </Link>
           
            <Link
              href="/hizmetlerimiz"
              className={`font-medium transition-colors ${
                isActive("/hizmetlerimiz")
                  ? "text-blue-600 font-bold"
                  : isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : isTeamMemberPage || isProjectDetailPage
                  ? "text-gray-900 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              }`}
            >
              Services
            </Link>
            <Link
              href="/haberler"
              className={`font-medium transition-colors ${
                isActive("/haberler")
                  ? "text-blue-600 font-bold"
                  : isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : isTeamMemberPage || isProjectDetailPage
                  ? "text-gray-900 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              }`}
            >
              News
            </Link>
            <Link
              href="/iletisim"
              className={`font-medium transition-colors ${
                isActive("/iletisim")
                  ? "text-blue-600 font-bold"
                  : isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : isTeamMemberPage || isProjectDetailPage
                  ? "text-gray-900 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              }`}
            >
              Contact
            </Link>
            <Link
              href="/iletisim"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Work With Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className={`${isScrolled ? "text-gray-800" : "text-white"}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`font-medium ${
                  isActive("/") ? "text-blue-600 font-bold" : "text-gray-800"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/hakkimizda"
                className={`font-medium ${
                  isActive("/hakkimizda") ? "text-blue-600 font-bold" : "text-gray-800"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/ekibimiz"
                className={`font-medium ${
                  isActive("/ekibimiz") ? "text-blue-600 font-bold" : "text-gray-800"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Our Team
              </Link>
              <Link
                href="/hizmetlerimiz"
                className={`font-medium ${
                  isActive("/hizmetlerimiz") ? "text-blue-600 font-bold" : "text-gray-800"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/haberler"
                className={`font-medium ${
                  isActive("/haberler") ? "text-blue-600 font-bold" : "text-gray-800"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </Link>
              <Link
                href="/iletisim"
                className={`font-medium ${
                  isActive("/iletisim") ? "text-blue-600 font-bold" : "text-gray-800"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/iletisim"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                Work With Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 