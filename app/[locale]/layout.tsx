import { notFound } from 'next/navigation'
import { PropsWithChildren } from 'react'

import Providers from './providers'
import { NextIntlClientProvider } from 'next-intl'

import '../globals.css'
import Navbar from './components/navbar/navbar'

const locales = ['en', 'ar']

type Props = {
	params: {
		locale: string
	}
} & PropsWithChildren

const RootLayout: React.FC<Props> = async ({
	children,
	params: { locale },
}) => {
	const isValidLocale = locales.some((cur) => cur === locale)
	let messages
	try {
		messages = (await import(`../../messages/${locale}.json`)).default
	} catch (error) {
		notFound()
	}
	if (!isValidLocale) notFound()

	return (
		<html lang={locale}>
			<body>
				<Providers>
					<NextIntlClientProvider locale={locale} messages={messages}>
						<div className='text-dark-600 bg-white dark:text-white dark:bg-dark-400 min-h-screen'>
							<Navbar />
							{children}
						</div>
					</NextIntlClientProvider>
				</Providers>
			</body>
		</html>
	)
}

export default RootLayout
