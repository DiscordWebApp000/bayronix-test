import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bayronix Group',
  description: 'Bayronix yazılım ajansı, web geliştirme, mobil uygulama ve dijital çözümler sunar.',
  icons: {
    icon: '/favicon.svg',
  },
  verification: {
    google: 'xKTGGqOi2Y3yij8eOotFpcfaGaBX8RQ5DfoISl9-Zf8',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContactButton />
      </body>
    </html>
  );
} 