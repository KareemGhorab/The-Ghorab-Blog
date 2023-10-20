import { PropsWithChildren } from 'react'

const Container: React.FC<PropsWithChildren> = ({ children }) => (
	<div className='mx-auto px-5 sm:px-0 sm:w-[620px] md:w-[740px] lg:w-[1000px]'>{children}</div>
)

export default Container
