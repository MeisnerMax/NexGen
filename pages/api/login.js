// pages/api/login.js – Admin-Login (setzt Auth-Cookie)
import cookie from 'cookie';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  const { username, password } = req.body;
  if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASSWORD) {
    // Setze HttpOnly-Cookie mit Token zur Authentifizierung des Adminbereichs
    res.setHeader('Set-Cookie', cookie.serialize('authToken', process.env.ADMIN_TOKEN, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 8,  // Login gilt 8 Stunden
      path: '/admin'
    }));
    return res.status(200).json({ message: 'Login erfolgreich' });
  } else {
    return res.status(401).json({ error: 'Ungültige Anmeldedaten' });
  }
}
