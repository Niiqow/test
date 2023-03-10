import '@/styles/globals.css'
import './assets/home.css';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  
  return <Component {...pageProps} />
}
