// components/BlogSlider.js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Autoplay, Navigation } from 'swiper';

// Registriere die Module
SwiperCore.use([Autoplay, Navigation]);

export default function BlogSlider() {
  const blogPosts = [
    {
      title: "Digitale Trends 2025",
      description: "Erfahren Sie, welche digitalen Entwicklungen Ihr Unternehmen 2025 prägen und wie Sie davon profitieren.",
      image: "/images/blog1.jpg",
      link: "/blog"
    },
    {
      title: "Effizienz durch Prozessautomatisierung",
      description: "Wie moderne Technologien manuelle Abläufe optimieren und die Effizienz in Unternehmen steigern.",
      image: "/images/blog2.jpg",
      link: "/blog"
    }
  ];

  return (
    <Swiper
      autoplay={{ delay: 5000 }}
      navigation
      spaceBetween={20}
      slidesPerView={1}
      loop
      className="w-full"
    >
      {blogPosts.map((post, index) => (
        <SwiperSlide key={index}>
          <a href={post.link} className="block transform transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="bg-blue rounded-lg overflow-hidden shadow-lg border-2 border-black">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-white font-bold mb-2">{post.title}</h3>
                <p className="text-white">{post.description}</p>
              </div>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}