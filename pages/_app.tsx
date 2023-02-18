import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import LocaleContext from "@/Components/LocaleContext";

export default function App({ Component, pageProps }: AppProps) {
  return(
      <LocaleContext>
        <Component {...pageProps} />
      </LocaleContext>
        )
}
