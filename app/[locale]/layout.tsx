import clsx from 'clsx'
import { notFound } from 'next/navigation'
import { PropsWithChildren } from 'react'

import styles from './layout.module.scss'

const locales = ['en', 'ar']

enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
}

type Props = {
	params: {
		locale: string
	}
	searchParams: {
		theme: string
	}
} & PropsWithChildren

const RootLayout: React.FC<Props> = ({
	children,
	params: { locale },
	searchParams: { theme = Theme.LIGHT },
}) => {
	const isValidLocale = locales.some((cur) => cur === locale)
	if (!isValidLocale) notFound()

	return (
		<html lang={locale}>
			<body
				className={clsx({
					[styles.light]: theme === Theme.LIGHT,
					[styles.dark]: theme === Theme.DARK,
				})}
			>
				{children}
			</body>
		</html>
	)
}

export default RootLayout
