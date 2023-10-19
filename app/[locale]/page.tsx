import { useTranslations } from 'next-intl'

export default function Index() {
	const t = useTranslations()
	return <h1>{t('Common.title')}</h1>
}
