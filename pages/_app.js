import '../styles/globals.css'
import Head from 'next/head'
import LayoutWrapper from '../components/LayoutWrapper'

import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
			{/* TODO: Analytics */}
			<LayoutWrapper>
				<Component { ...pageProps } />
			</LayoutWrapper>
		</ThemeProvider>
	)
}
