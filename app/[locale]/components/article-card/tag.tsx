import clsx from 'clsx'

export type TagProps = {
	variant: 'purple' | 'blue' | 'red' | 'green'
	label: string
}

const Tag: React.FC<TagProps> = ({ label, variant }) => (
	<div
		className={clsx('px-1 rounded-full', {
			'bg-red-400 text-red-600': variant === 'red',
			'bg-blue-400 text-blue-600': variant === 'blue',
			'bg-purple-400, text-purple-600': variant === 'purple',
			'bg-green-400, text-green-600': variant === 'green',
		})}
	>
		{label}
	</div>
)

export default Tag
