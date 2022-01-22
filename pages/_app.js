import { useState } from 'react';
import Router from 'next/router';
import Layout from '../components/layout/Layout';
import Loader from '../components/ui/Loader';
import nprogress from 'nprogress';
import Head from 'next/head';
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
      <Head>
         <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous" />
      </Head>
         {loading && <Loader />}
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </>
   );
};
export default MyApp;