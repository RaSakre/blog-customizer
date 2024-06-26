import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';
import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [props, setProps] = useState(defaultArticleState);
	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': props.fontFamilyOption.value,
					'--font-size': props.fontSizeOption.value,
					'--font-color': props.fontColor.value,
					'--container-width': props.contentWidth.value,
					'--bg-color': props.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setProps={setProps} />
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
