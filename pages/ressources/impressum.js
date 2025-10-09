import Head from 'next/head';

export default function Impressum() {
  return (
    <>
      <Head>
        <title>Impressum - Nexgen Consulting Digitalisation</title>
        <meta name="description" content="Impressum von Nexgen Consulting Digitalisation" />
      </Head>
      <main className="container mx-auto py-16 px-4 text-white">
        <h1 className="text-3xl font-bold mb-6">Impressum</h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
          <p>
            Max Meisner - Nexgen-Consulting <br />
            Webergasse 30, 96450 Coburg <br />
            Deutschland
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Vertreten durch:</h2>
          <p>Max Meisner</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Kontakt:</h2>
          <p>
            Telefon: +4915227433448 <br />
            E-Mail: maxmeisner3@gmail.com <br />
            Website: Nexgen-Consulting.de
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Umsatzsteuer-Identifikationsnummer:</h2>
          <p>USt-IdNr.: folgt</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Registereintrag:</h2>
          <p>
            folgt
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Inhaltlich Verantwortlicher gemäß § 18 Abs. 2 MStV:</h2>
          <p>Max Meisner</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Haftungsausschluss:</h2>
          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Streitschlichtung:</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </main>
    </>
  );
}
