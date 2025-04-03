// components/NavBar.js
import Link from 'next/link';
import { useState } from 'react';
import Head from 'next/head';

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
      <nav className="absolute top-0 left-0 w-full z-50 bg-blue text-white">
        <div className="container mx-auto flex items-center p-4">
          {/* Linke Seite: Brand + Social Media Icons */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl text-[#E64000] font-bold hover:underline">
              Nexgen
            </Link>
            <Link href="/" className="text-2xl  font-bold hover:underline">
              Consulting
            </Link>
            {/* Social Media Icons */}
            <a
              href="https://www.linkedin.com/company/106936390"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-300"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 
                19h-2v-9h2v9zm-1-10.268c-.69 0-1.248-.558-1.248-1.246
                0-.689.558-1.246 1.248-1.246.687 0 1.246.557 
                1.246 1.246 0 .688-.559 1.246-1.246 
                1.246zm12 10.268h-2v-4.5c0-1.07-.021-2.444-1.49-2.444
                -1.492 0-1.72 1.162-1.72 2.364v4.58h-2v-9h1.922v1.234h.
                028c.268-.505.92-1.038 1.893-1.038 2.025 0 2.396 
                1.333 2.396 3.069v5.735z"/>
              </svg>
            </a>
        
          </div>

          {/* Zentrierte Tabs (Desktop) */}
          <div className="flex-1 hidden md:flex justify-center space-x-6">
            {<Link href="/" className="hover:underline">
              Home
            </Link>}
            {<Link href="/services/website" className="hover:underline">
              Website
            </Link>}
            {<Link href="/services/marketing" className="hover:underline"> 
              Marketing
            </Link>}
            {/* <Link href="/services/schulungen" className="hover:underline">
              Schulungen
            </Link>
            <Link href="/services/software" className="hover:underline">
              Software
            </Link>
            <Link href="/services/prozess" className="hover:underline">
              Optimierung
            </Link> */}
            {<Link href="/services/contact" className="hover:underline">
              Kontakt
            </Link>}
          </div>

          {/* Mobile Menü-Button */}
          <div className="md:hidden ml-auto">
            <MobileMenu />
          </div>
        </div>
      </nav>
    </>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        className="text-2xl focus:outline-none transition duration-300"
        onClick={() => setOpen(!open)}
      >
        &#9776;
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-72 bg-blue rounded shadow-lg p-4 z-50 transition transform duration-300">
          <Link href="/" className="block py-2 hover:underline">Home</Link>
          <Link href="/services/online" className="block py-2 hover:underline">Online Auftritt</Link>
          <Link href="/services/automation" className="block py-2 hover:underline">Software</Link>
          <Link href="/blog" className="block py-2 hover:underline">Blog</Link>
          <Link href="/services/contact" className="block py-2 hover:underline">Kontakt</Link>
          
        </div>
      )}
    </div>
  );
}
