// pages/admin/new-post.js – Neuer Blogpost erstellen
import { useState } from 'react';
import Router from 'next/router';
import Head from 'next/head';

export default function NewPost() {
  const [form, setForm] = useState({ title: '', excerpt: '', content: '' });
  const [message, setMessage] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitPost = async (e) => {
    e.preventDefault();
    setMessage(null);
    try {
      const res = await fetch('/api/create-post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        const data = await res.json();
        setMessage('Post erstellt!');
        Router.push('/blog/' + data.slug);
      } else {
        const data = await res.json();
        setMessage(data.error || 'Fehler beim Erstellen des Posts.');
      }
    } catch (err) {
      setMessage('Fehler beim Erstellen des Posts.');
    }
  };

  return (
    <>
      <Head>
        <title>Neuer Blogpost - Nexgen Consulting</title>
      </Head>
      <section className="container mx-auto py-12 max-w-lg">
        <h1 className="text-3xl font-bold mb-6">Neuen Blogpost erstellen</h1>
        <form onSubmit={submitPost} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Titel</label>
            <input 
              type="text" name="title" required 
              value={form.title} onChange={handleChange} 
              className="w-full border px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Auszug (optional)</label>
            <input 
              type="text" name="excerpt" 
              value={form.excerpt} onChange={handleChange} 
              className="w-full border px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Inhalt</label>
            <textarea 
              name="content" rows="6" required 
              value={form.content} onChange={handleChange} 
              className="w-full border px-3 py-2"
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2">Veröffentlichen</button>
          {message && <p className="mt-2">{message}</p>}
        </form>
      </section>
    </>
  );
}

// SSR: Authentifizierung prüfen
import cookie from 'cookie';
export async function getServerSideProps({ req }) {
  const cookies = cookie.parse(req.headers.cookie || '');
  if (cookies.authToken !== process.env.ADMIN_TOKEN) {
    return { redirect: { destination: '/admin/login', permanent: false } };
  }
  return { props: {} };
}
