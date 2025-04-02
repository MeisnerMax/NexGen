// pages/services/consulting.js – Leistungsseite "Digitalisierungs-Beratung"
import Head from 'next/head';
import Image from 'next/image';

export default function ConsultingService() {
  return (
    <>
      <Head>
        <title>Digitalisierungs-Beratung - Meisner Consulting</title>
        <meta name="description" content="Wir beraten Sie bei der digitalen Transformation Ihres Unternehmens." />
      </Head>
      <section className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-6">Digitalisierungs-Beratung</h1>
        <Image src="/images/consulting.jpg" alt="Beratung" width={800} height={450} className="rounded-lg mb-6" />
        <p className="text-lg leading-7">
          Wir analysieren Ihre Geschäftsprozesse und entwickeln eine maßgeschneiderte Digitalisierungsstrategie. 
          Dabei begleiten wir Sie von der Planung bis zur Umsetzung und schulen Ihre Mitarbeiter für einen reibungslosen 
          Übergang in digitale Workflows.
        </p>
      </section>
    </>
  );
}
