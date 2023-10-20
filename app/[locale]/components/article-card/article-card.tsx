import { TagProps } from './tag'

type Props = {
	variant: 'horizontal' | 'vertical',
	image: string,
	author: string,
	date: string,
	title: string,
	content: string
	tags: TagProps[]
}

const ArticleCard: React.FC<Props> = () => <article></article>

export default ArticleCard