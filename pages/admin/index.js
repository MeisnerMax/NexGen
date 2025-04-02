// pages/admin/index.js – Admin Dashboard Übersicht
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function AdminDashboard({ posts, subscribers }) {
  const [subs, setSubs] = useState(subscribers);

  const removeSubscriber = async (email) => {
    if (!confirm(`Abonnent ${email} entfernen?`)) return;
    const res = await fetch(`/api/newsletter?email=${email}`, { method: 'DELETE' });
    if (res.ok) {
      setSubs(subs.filter(s => s.email !== email));
    }
  };

  return (
    <>
      <Head>
        <title>Admin Dashboard - Nexgen Consulting</title>
      </Head>
      <section className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        <h2 className="text-2xl font-semibold mb-4">Blogposts</h2>
        <ul className="mb-8 list-disc list-inside">
          {posts.map(post => (
            <li key={post.slug}>
              {post.title} <span className="text-sm text-gray-500">({post.date})</span>
            </li>
          ))}
        </ul>
        <Link 
          href="/admin/new-post" 
          className="inline-block bg-blue-600 text-white px-4 py-2 mb-8"
        >
          Neuen Post erstellen
        </Link>

        <h2 className="text-2xl font-semibold mb-4">Newsletter Abonnenten</h2>
        <ul className="list-disc list-inside">
          {subs.map(sub => (
            <li key={sub.email}>
              {sub.email} 
              <button 
                onClick={() => removeSubscriber(sub.email)} 
                className="text-red-600 ml-2"
              >
                Entfernen
              </button>
            </li>
          ))}
        </ul>

        <button 
          onClick={() => { fetch('/api/logout').then(() => location.href = '/'); }} 
          className="mt-8 bg-gray-300 px-4 py-2"
        >
          Logout
        </button>
      </section>
    </>
  );
}

import cookie from 'cookie';
import { getSortedPosts } from '../../lib/posts';
import fs from 'fs';
import path from 'path';

// Serverseitiger Auth-Check und Laden der Daten
export async function getServerSideProps({ req }) {
  const cookies = cookie.parse(req.headers.cookie || '');
  if (cookies.authToken !== process.env.ADMIN_TOKEN) {
    return { redirect: { destination: '/admin/login', permanent: false } };
  }
  // Blogposts laden
  const posts = getSortedPosts();
  // Abonnenten laden
  const subFile = path.join(process.cwd(), 'data', 'subscribers.json');
  let subscribers = [];
  if (fs.existsSync(subFile)) {
    subscribers = JSON.parse(fs.readFileSync(subFile, 'utf-8'));
  }
  return { props: { posts, subscribers } };
}
