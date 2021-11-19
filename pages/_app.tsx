import '../styles/globals.scss'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (

  <Layout>
    <Navbar />
  <Component {...pageProps} />
  </Layout >
  
    )
}

export default MyApp
