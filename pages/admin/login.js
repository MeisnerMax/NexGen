// pages/admin/login.js
import { useState } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import cookie from 'cookie';

export default function AdminLogin() {
  const [creds, setCreds] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);

  const handleChange = e => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(creds)
    });
    if (res.ok) {
      Router.push('/admin');
    } else {
      const data = await res.json();
      setError(data.error || 'Login fehlgeschlagen');
    }
  };

  return (
    <>
      <Head>
        <title>Admin Login - Nexgen Consulting</title>
      </Head>
      <section className="container mx-auto py-12 max-w-sm">
        <h1 className="text-3xl font-bold mb-6">Admin Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Benutzername</label>
            <input 
              type="text" name="username" required
              value={creds.username} onChange={handleChange} 
              className="w-full border px-3 py-2" 
            />
          </div>
          <div>
            <label className="block mb-1">Passwort</label>
            <input 
              type="password" name="password" required
              value={creds.password} onChange={handleChange} 
              className="w-full border px-3 py-2" 
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 w-full">Login</button>
          {error && <p className="text-red-600">{error}</p>}
        </form>
      </section>
    </>
  );
}

// Falls bereits eingeloggt, direkt ins Dashboard umleiten
export async function getServerSideProps({ req }) {
  const cookies = cookie.parse(req.headers.cookie || '');
  if (cookies.authToken === process.env.ADMIN_TOKEN) {
    return { redirect: { destination: '/admin', permanent: false } };
  }
  return { props: {} };
}
