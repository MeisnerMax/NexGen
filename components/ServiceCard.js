import Link from 'next/link';

export default function ServiceCard({ icon, title, description, href }) {
  return (
    <Link href={href} passHref>
      <div className="w-full max-w-sm mx-auto transform transition duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
        <div className="bg-blue text-white rounded-2xl overflow-hidden shadow-md p-6 text-center hover:bg-[#E65100] transition-colors duration-300 border-4 border-white h-full flex flex-col justify-between">
          
          {/* Icon-Bereich */}
          <div className="w-16 h-16 mx-auto mb-4 bg-[#E65100] text-white rounded-full flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transform transition-transform">
            {icon}
          </div>

          {/* Text-Bereich */}
          <div>
            <h4 className="text-xl font-bold mb-2">{title}</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
