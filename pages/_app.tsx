import '../styles/globals.scss'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import SEO from '../components/SEO'
import type { AppProps } from 'next/app'
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (

  <Layout>
    <SEO />
    <Navbar />
    <motion.div
      key={router.route}
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
    >
  <Component {...pageProps} />
  </motion.div>
  </Layout >
  
    )
}

export default MyApp
