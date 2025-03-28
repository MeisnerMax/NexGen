// pages/_app.js
import '../styles/globals.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
