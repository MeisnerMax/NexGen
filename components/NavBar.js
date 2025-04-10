import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image'; // Importiere das Image-Element
import logo from '../public/images/logo2.png';

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
      <nav className="sticky top-0 left-0 w-full z-50 bg-blue/90 text-white">
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
            <Link href="/" className="text-2xl text-[#E64000] font-bold hover:underline">
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
        <div className="absolute right-0 w-64 bg-black shadow-lg rounded-lg p-4 z-50 border border-[#E64000]">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="flex items-center space-x-2 text-white hover:text-blue-300 transition"
              onClick={closeMenu}
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
              <span>Home</span>
            </Link>
            <Link
              href="/services/website"
              className="flex items-center space-x-2 text-white hover:text-blue-300 transition"
              onClick={closeMenu}
            >
             <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
              <span>Website</span>
            </Link>
            <Link
              href="/services/marketing"
              className="flex items-center space-x-2 text-white hover:text-blue-300 transition"
              onClick={closeMenu}
            >
            <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
              <span>Marketing</span>
            </Link>
            <Link
              href="/services/app"
              className="flex items-center space-x-2 text-white hover:text-blue-300 transition"
              onClick={closeMenu}
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
              <span>App</span>
            </Link>
            <Link
              href="/services/contact"
              className="flex items-center space-x-2 text-white hover:text-blue-300 transition"
              onClick={closeMenu}
            >
             <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
              <span>Kontakt</span>
            </Link>

            {/* Social Media Icons */}
            <div className="flex justify-around mt-4">
              <a
                href="https://www.linkedin.com/company/106936390"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white hover:text-blue-300 transition"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-2v-9h2v9zm-1-10.268c-.69 0-1.248-.558-1.248-1.246 0-.689.558-1.246 1.248-1.246.687 0 1.246.557 1.246 1.246 0 .688-.559 1.246-1.246 1.246zm12 10.268h-2v-4.5c0-1.07-.021-2.444-1.49-2.444-1.492 0-1.72 1.162-1.72 2.364v4.58h-2v-9h1.922v1.234h.028c.268-.505.92-1.038 1.893-1.038 2.025 0 2.396 1.333 2.396 3.069v5.735z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/nexgenconsultingcoburg/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white hover:text-blue-300 transition"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.205.012-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.335.014 5.071.18C1.808.346.347 1.807.18 5.071.014 8.335 0 8.741 0 12c0 3.259.014 3.665.18 6.929.166 3.263 1.627 4.724 4.891 4.891 3.264.166 3.669.18 6.928.18 3.259 0 3.665-.014 6.929-.18 3.264-.167 4.724-1.628 4.891-4.891.166-3.263.18-3.668.18-6.928 0-3.259-.014-3.665-.18-6.929-.167-3.263-1.628-4.724-4.891-4.891-3.263-.166-3.668-.18-6.928-.18z" />
                  <path d="M12 5.838c-3.407 0-6.162 2.755-6.162 6.162 0 3.407 2.755 6.162 6.162 6.162 3.407 0 6.162-2.755 6.162-6.162 0-3.407-2.755-6.162-6.162-6.162zm0 7.621c-.824 0-1.494-.67-1.494-1.494 0-.824.67-1.494 1.494-1.494.824 0 1.494.67 1.494 1.494 0 .824-.67 1.494-1.494 1.494z" />
                  <path d="M20.324 6.117c-.401 0-.727-.326-.727-.727 0-.401.326-.727.727-.727.401 0 .727.326.727.727 0 .401-.326.727-.727.727z" />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}