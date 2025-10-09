// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-[#091B33]  text-white">
      <div className="container mx-auto text-center space-y-6">
        <div className="space-y-2">
          <p className="text-lg font-bold">Max Meisner – Nexgen-Consulting</p>
                 </div>
        <div className="flex justify-center gap-4 text-sm">
          <a href="https://www.linkedin.com/company/nexgen-consulting-de/" className="hover:text-white">LinkedIn</a>
          <a href="https://www.instagram.com/nexgen.consulting/" className="hover:text-white">Instagram</a>
          
        </div>
        <div className="mb-2 space-x-4 text-sm">
          <a href="/ressources/impressum" className="hover:underline">Impressum</a>
          <a href="/ressources/datenschutz" className="hover:underline">Datenschutz</a>
        </div>
        <p className="text-sm">&copy; 2025 Max Meisner – Nexgen-Consulting. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}
