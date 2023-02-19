import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import LocaleContextProvider from "@/components/LocaleContext";

export default function App({ Component, pageProps }: AppProps) {
  return(
      <LocaleContextProvider>
        <Component {...pageProps} />
      </LocaleContextProvider>
        )
}
