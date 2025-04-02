// pages/_app.js
import '../styles/globals.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import Layout from '../components/Layout';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
