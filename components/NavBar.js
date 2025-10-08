import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image'; // Importiere das Image-Element
import logo from '../public/images/logo.png';

export default function NavBar() {
  return (
    <>
      <Head>
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nexgen Consulting – Digitalisierung, Webdesign und Automatisierung" />
        <meta property="og:description" content="Nexgen Consulting – Ihr Partner für Digitalisierung, Prozessautomatisierung, Webdesign und SEO-Optimierung für kleine und mittelständische Unternehmen." />
        <meta property="og:image" content="https://nexgen-consulting.de/logo.png" />
        <meta property="og:url" content="https://nexgen-consulting.de" />
        <meta property="og:site_name" content="Nexgen Consulting" />
      </Head>
      <nav className="sticky top-0 left-0 w-full z-50 bg-brand-primary text-white">
        <div className="container mx-auto flex items-center p-4">
          {/* Linke Seite: Brand */}
          <div className="flex items-center space-x-4">
            <Image
              src={logo} // Verwende das importierte Logo
              alt="Nexgen Consulting Logo"
              width={50}  // Passe die Breite an
              height={50} // Passe die Höhe an
              className="mr-2" // Füge etwas Abstand hinzu
            />
            <Link href="/" className="text-2xl text-brand-accent font-bold hover:underline">
              Nexgen
            </Link>
            <Link href="/" className="text-2xl font-bold hover:underline">
              Consulting
            </Link>
          </div>

          {/* Dropdown-Menü für alle Bildschirmgrößen */}
          <div className="ml-auto">
            <MobileMenu />
          </div>
        </div>
      </nav>
    </>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="text-3xl text-white focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Menü öffnen"
      >
        &#9776;
      </button>

      {open && (
        <div className="absolute right-0 w-64 bg-brand-primary shadow-lg rounded-lg p-4 z-50 border border-[#E64000]">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2 text-white hover:text-blue-300 transition" onClick={closeMenu}>
              <span>Home</span>
            </Link>

            <Link href="/services/beratung" className="flex items-center space-x-2 text-white hover:text-blue-300 transition" onClick={closeMenu}>
              <span>Beratung</span>
            </Link>

            <Link href="/services/website" className="flex items-center space-x-2 text-white hover:text-blue-300 transition" onClick={closeMenu}>
              <span>Website</span>
            </Link>

            <Link href="/services/marketing" className="flex items-center space-x-2 text-white hover:text-blue-300 transition" onClick={closeMenu}>
              <span>Marketing</span>
            </Link>

            <Link href="/blog" className="flex items-center space-x-2 text-white hover:text-blue-300 transition" onClick={closeMenu}>
              <span>Blog</span>
            </Link>

            <Link href="/services/firmenidentitaet" className="flex items-center space-x-2 text-white hover:text-blue-300 transition" onClick={closeMenu}>
              <span>Firmenidentität</span>
            </Link>

            <Link href="/services/schulungen" className="flex items-center space-x-2 text-white hover:text-blue-300 transition" onClick={closeMenu}>
              <span>Schulungen</span>
            </Link>

            <Link href="/services/lösungen" className="flex items-center space-x-2 text-white hover:text-blue-300 transition" onClick={closeMenu}>
              <span>Softwareberatung</span>
            </Link>

            <Link href="/services/softwareentwicklung" className="flex items-center space-x-2 text-white hover:text-blue-300 transition" onClick={closeMenu}>
              <span>Softwareentwicklung</span>
            </Link>

            <Link href="/services/app" className="flex items-center space-x-2 text-white hover:text-blue-300 transition" onClick={closeMenu}>
              <span>Appentwicklung</span>
            </Link>

            <Link href="/services/contact" className="flex items-center space-x-2 text-white hover:text-blue-300 transition" onClick={closeMenu}>
              <span>Kontakt</span>
            </Link>

            <div className="flex justify-around mt-4">
              <a href="https://www.linkedin.com/company/106936390" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-blue-300 transition">LinkedIn</a>
              <a href="https://www.instagram.com/nexgenconsultingcoburg/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-blue-300 transition">Instagram</a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
