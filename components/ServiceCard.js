// components/ServiceCard.js
export default function ServiceCard({ icon, title, description, onClick }) {
  return (
    <div
      onClick={onClick}
      className="block group transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
    >
      <div className="bg-blue-900 rounded-lg overflow-hidden shadow-2xl p-6 text-center">
        <div className="group-hover:animate-pulse">{icon}</div>
        <h4 className="text-xl font-bold my-4 text-white">{title}</h4>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
}
