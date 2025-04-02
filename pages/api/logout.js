// pages/api/logout.js – Admin-Logout (Cookie ungültig machen)
import cookie from 'cookie';

export default function handler(req, res) {
  // Cookie entfernen/ungültig setzen
  res.setHeader('Set-Cookie', cookie.serialize('authToken', '', {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    expires: new Date(0),
    path: '/admin'
  }));
  res.status(200).json({ message: 'Logged out' });
}
