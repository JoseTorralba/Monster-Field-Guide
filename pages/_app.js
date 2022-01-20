import { useState } from 'react';
import Router from 'next/router';
import Layout from '../components/layout/Layout';
import Loader from '../components/ui/Loader';
import nprogress from 'nprogress';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
   const [loading, setLoading] = useState(false);

   Router.events.on('routeChangeStart', url => {
      setLoading(true);
      nprogress.start();
   })

   Router.events.on('routeChangeComplete', url => {
      nprogress.done();
      setLoading(false);
   })

   return (
      <>
         {loading && <Loader />}
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </>
   );
};

export default MyApp;