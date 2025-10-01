// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-brand-primary  text-white">
      <div className="container mx-auto text-center ">
        <div className="mb-4">
          <p className="text-lg font-bold">Max Meisner - NexGen-Consulting</p>
          <p></p>
          <p></p>
        </div>
        <div className="mb-4">
          <a href="https://www.linkedin.com/company/106936390" className="mx-2 hover:text-white">LinkedIn</a>
          <a href="https://www.instagram.com/nexgenconsultingcoburg" className="mx-2 hover:text-white">Instagram</a>
        </div>
        <div className="mb-2">
          <a href="/impressum" className="hover:underline">Impressum</a>
          <a href="/datenschutz" className="hover:underline ml-4">Datenschutz</a>
        </div>
        <p className="text-sm">&copy; 2025 Max Meisner - Nexgen-Consulting . Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}
