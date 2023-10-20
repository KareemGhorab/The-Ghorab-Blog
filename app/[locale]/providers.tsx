'use client'

import { ThemeProvider } from 'next-themes'
import { PropsWithChildren } from 'react'

const Providers: React.FC<PropsWithChildren> = ({ children }) => (
	<ThemeProvider attribute='class'>{children}</ThemeProvider>
)

export default Providers
