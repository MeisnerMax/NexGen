// components/TestimonialsSlider.js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore, { Navigation, Autoplay } from 'swiper';

// Registriere die Module
SwiperCore.use([Navigation, Autoplay]);

export default function TestimonialsSlider() {
  const testimonials = [
    {
      text: "Dank Nexgen Consulting haben wir unsere Prozesse revolutioniert. Die Zusammenarbeit war exzellent und nachhaltig.",
      author: "Dr. Martina Becker, CEO"
    },
    {
      text: "Unsere Online-Präsenz wurde komplett neu definiert – wir verzeichnen signifikantes Wachstum und einen deutlichen Markenaufbau.",
      author: "Klaus Schneider, Marketing Director"
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
      {testimonials.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-blue p-6 rounded-lg shadow-lg text-center">
            <p className="text-gray-1000 italic mb-4">"{item.text}"</p>
            <p className="text-gray-1000 font-bold">– {item.author}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
