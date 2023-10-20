'use client'

import { Moon, Sun } from '@phosphor-icons/react'
import { useTheme } from 'next-themes'

const ThemeToggler: React.FC = () => {
	const { theme, setTheme } = useTheme()

	return (
		<button
			className='bg-dark-400 dark:bg-white rounded-full w-24 h-10 relative cursor-pointer'
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
		>
			<Sun
				size={24}
				className='text-white left-4 top-1/2 -translate-y-1/2 absolute'
			/>
			<Moon
				size={24}
				className='text-dark-400 right-4 top-1/2 -translate-y-1/2 absolute'
			/>
			<div className='bg-white dark:bg-dark-400 rounded-full w-6 h-6 absolute top-1/2 -translate-y-1/2 right-4 dark:-translate-x-10 transition-transform duration-100' />
		</button>
	)
}

export default ThemeToggler
