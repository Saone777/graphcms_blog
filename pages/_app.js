// pages/_app.js
import React from 'react';
import '../styles/globals.scss'; // Import your global SCSS file here
import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
