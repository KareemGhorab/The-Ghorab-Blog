'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import ThemeToggler from './theme-toggler'
import Image from 'next/image'
import Container from '@/app/components/ui/container'

const Navbar: React.FC = () => {
	const t = useTranslations()

	return (
		<Container>
			<nav className='py-8 flex flex-col gap-10'>
				<section className='flex justify-between items-center text-xl'>
					<h2 className='flex font-semibold gap-4'>
						<Link href='https://kareemghorab.com' target='_blank'>
							<Image
								src='/kareem.png'
								alt='Kareem Ghorab Logo'
								width={32}
								height={32}
								unoptimized
							/>
						</Link>
						<Link
							href='/blog'
							className='hidden sm:block text-2xl text-center'
						>
							{t('Common.name')}
						</Link>
					</h2>
					<section>
						<ThemeToggler />
					</section>
				</section>
				<section>
					<h1 className='text-center font-bold text-3xl sm:text-[66px] md:text-[79px] lg:text-[107px] uppercase'>
						{t('Common.title')}
					</h1>
				</section>
			</nav>
		</Container>
	)
}

export default Navbar
