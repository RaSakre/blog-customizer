import clsx from 'clsx';
import { Article } from '../components/article/Article';
import { ArticleParamsForm } from '../components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from 'src/constants/articleProps';
import { CSSProperties, useState } from 'react';
import '../styles/index.scss';
import styles from '../styles/index.module.scss';

export const App = () => {
	const [articleOptions, setArticleOptions] = useState(defaultArticleState);
	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': articleOptions.fontFamilyOption.value,
					'--font-size': articleOptions.fontSizeOption.value,
					'--font-color': articleOptions.fontColor.value,
					'--container-width': articleOptions.contentWidth.value,
					'--bg-color': articleOptions.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setArticleOptions={setArticleOptions} />
			<Article />
		</div>
	);
};
