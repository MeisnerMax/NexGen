// pages/blog/index.js
import Head from 'next/head';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Digitale Trends 2025",
      description: "Erfahren Sie, welche digitalen Entwicklungen Ihr Unternehmen 2025 prägen und wie Sie davon profitieren.",
      image: "/images/blog1.jpg",
      link: "/blog/digitale-trends-2025",
      category: "Trends"
    },
    {
      id: 2,
      title: "Effizienz durch Prozessautomatisierung",
      description: "Wie moderne Technologien manuelle Abläufe optimieren und die Effizienz in Unternehmen steigern.",
      image: "/images/blog2.jpg",
      link: "/blog/prozessautomatisierung-effizienz",
      category: "Prozess"
    },
    // Füge hier weitere Blogposts hinzu, falls benötigt
  ];

  const [filter, setFilter] = useState("Alle");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    if (filter === "Alle") {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === filter));
    }
  }, [filter]);

  // Animate blog cards when they enter the viewport
  useEffect(() => {
    gsap.fromTo(
      ".blog-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".blog-grid",
          start: "top 80%",
        },
      }
    );
  }, [filteredPosts]);

  return (
    <>
      <Head>
        <title>Blog - Nexgen Consulting </title>
        <meta name="description" content="Entdecken Sie aktuelle Beiträge zu digitalen Trends, Prozessautomatisierung und mehr." />
      </Head>

      <NavBar />

      <main className="container mx-auto py-24 px-8">
        {/* Header */}
        <header className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl text-white font-bold mb-4">Blog</h1>
          <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed">
            Entdecken Sie inspirierende Beiträge und Einblicke in die digitale Welt, die Ihnen helfen, Ihre Effizienz zu steigern und innovative Lösungen zu finden.
          </p>
        </header>

        {/* Filter Bar */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => setFilter("Alle")}
            className={`px-4 py-2 mx-2 rounded ${filter==="Alle" ? "bg-blue text-white" : "bg-black text-white"}`}
          >
            Alle
          </button>
          <button
            onClick={() => setFilter("Trends")}
            className={`px-4 py-2 mx-2 rounded ${filter==="Trends" ? "bg-blue text-white" : "bg-black text-white"}`}
          >
            Trends
          </button>
          <button
            onClick={() => setFilter("Prozess")}
            className={`px-4 py-2 mx-2 rounded ${filter==="Prozess" ? "bg-blue text-white" : "bg-black text-white"}`}
          >
            Prozess
          </button>
          {/* Füge weitere Filter hinzu, falls erforderlich */}
        </div>

        {/* Blog-Grid */}
        <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              className="blog-card block transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="bg-blue rounded-lg overflow-hidden shadow-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="text-xl text-white font-bold mb-2">{post.title}</h3>
                  <p className="text-white">{post.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>

      
    </>
  );
}
