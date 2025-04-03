// pages/contact.js
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    services: [], // Neu hinzugefügt
  });
  const [status, setStatus] = useState(null);

  const router = useRouter();

useEffect(() => {
  const messageFromQuery = router.query.message;
  if (messageFromQuery) {
    setFormData((prev) => ({
      ...prev,
      message: decodeURIComponent(messageFromQuery),
    }));
  }
}, [router.query]);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('Nachricht gesendet!');
        setFormData({ name: '', email: '', message: '', services: [] }); // Reset
      } else {
        setStatus('Fehler beim Senden der Nachricht.');
      }
    } catch (error) {
      setStatus('Fehler beim Senden der Nachricht.');
    }
  };

  return (
    <>
      <Head>
        <title>Kontakt - Nexgen Consulting</title>
      </Head>
      <div className="container mx-auto py-40 px-4 md:px-0 flex flex-col md:flex-row gap-12">
        {/* Linke Seite: Kontaktdaten */}
        <div className="md:w-1/2 bg-[#E64000] p-8 rounded-lg shadow-2xl ring-1 ring-black backdrop-blur-md">
          <h2 className="text-3xl text-white font-bold mb-6">Unsere Kontaktdaten</h2>
          <p className="text-white mb-4">
            Haben Sie Fragen oder möchten Sie mehr über unsere Dienstleistungen erfahren? Kontaktieren Sie uns!
          </p>
          <ul className="text-white space-y-4">
            <li>
              <strong>Telefon:</strong> <a href="tel:+4915227433448" className="text-white hover:underline">+4915227433448</a>
            </li>
            <li>
              <strong>E-Mail:</strong> <a href="mailto:info@nexgen-consulting.de" className="text-white hover:underline">meisner@nexgen-consulting.de</a>
            </li>
          </ul>
        </div>

        {/* Rechte Seite: Kontaktformular */}
        <div className="md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 space-y-6 p-8 rounded-lg shadow-2xl ring-1 ring-black backdrop-blur-md"
          >
            <h1 className="text-4xl text-white font-bold mb-6 text-center">Kontakt</h1>
            <div>
              <label className="block mb-2 font-semibold text-white">Name</label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-white">E-Mail</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-white">Nachricht</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block mb-4 font-semibold text-white">Interessierte Services</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Webdesign & Branding",
                  "Webshop",
                  "Google Analytics",
                  "SEO",
                  "Social Media",
                  "Logo & Firmenidentität",
                  "Microsoft 365",
                  "Prozessautomatisierung",
                  "Softwareentwicklung",
                  "Appentwicklung",
                ].map((service) => (
                  <div key={service} className="flex items-center">
                    <input
                      type="checkbox"
                      id={service}
                      name="services"
                      value={service}
                      checked={formData.services.includes(service)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({
                            ...formData,
                            services: [...formData.services, service],
                          });
                        } else {
                          setFormData({
                            ...formData,
                            services: formData.services.filter((s) => s !== service),
                          });
                        }
                      }}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor={service} className="ml-2 text-white">
                      {service}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Absenden
            </button>
            {status && <p className="mt-4 text-center">{status}</p>}
          </form>
        </div>
      </div>
    </>
  );
}
