// pages/api/create-post.js – neuen Blogpost als Markdown anlegen
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'posts');

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  const { title, content, excerpt } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Titel und Inhalt erforderlich.' });
  }
  // Slug aus Titel erzeugen (Kleinbuchstaben, Bindestriche)
  const slug = title.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
  const filePath = path.join(postsDir, `${slug}.md`);
  if (fs.existsSync(filePath)) {
    return res.status(409).json({ error: 'Ein Blogpost mit diesem Titel existiert bereits.' });
  }
  const date = new Date().toISOString().split('T')[0];
  // Markdown-Inhalt mit Frontmatter erstellen
  const markdownContent = matter.stringify(content, {
    title: title,
    date: date,
    excerpt: excerpt || '',
    author: 'Admin'
  });
  fs.writeFileSync(filePath, markdownContent);
  return res.status(201).json({ message: 'Post erstellt', slug });
}
