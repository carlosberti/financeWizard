import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import TransactionsContextProvider from 'contexts/transactions'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Finance Wizard </title>
        <link
          rel="shortcut icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>&#129497;</text></svg>"
        />
        <meta
          name="description"
          content="A web app made to help you control your finances"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyles />
      <TransactionsContextProvider>
        <Component {...pageProps} />
      </TransactionsContextProvider>
    </>
  )
}

export default App
