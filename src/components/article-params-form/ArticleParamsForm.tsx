import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { useState, useRef, FormEvent, useEffect } from 'react';
import styles from './ArticleParamsForm.module.scss';
import { RadioGroup } from '../radio-group';
import { Select } from '../select';
import { Separator } from '../separator';
import { Text } from '../text';
import {
	defaultArticleState,
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	ArticleStateType,
} from 'src/constants/articleProps';

type PropsType = {
	setProps: (articleState: ArticleStateType) => void;
};

export const ArticleParamsForm = ({ setProps }: PropsType) => {
	const [isOpen, setIsOpen] = useState(false);
	const formRef = useRef<HTMLDivElement>(null);
	const defaultFont = defaultArticleState.fontFamilyOption;
	const defaultFontSize = defaultArticleState.fontSizeOption;
	const defaultFontColor = defaultArticleState.fontColor;
	const defaultBgColor = defaultArticleState.backgroundColor;
	const defaultContentWidth = defaultArticleState.contentWidth;
	const [fontFamily, setFontFamily] = useState(defaultFont);
	const [fontSize, setFontSize] = useState(defaultFontSize);
	const [fontColor, setFontColor] = useState(defaultFontColor);
	const [bgColor, setBgColor] = useState(defaultBgColor);
	const [contentWidth, setContentWidth] = useState(defaultContentWidth);
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (formRef.current && !formRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen, formRef]);
	function setPropsToDefault(evt: FormEvent) {
		evt.preventDefault();
		const properties = {
			fontFamilyOption: defaultFont,
			fontColor: defaultFontColor,
			backgroundColor: defaultBgColor,
			contentWidth: defaultContentWidth,
			fontSizeOption: defaultFontSize,
		};
		setProps(properties);
	}
	function handleSubmit(evt: FormEvent) {
		evt.preventDefault();
		const properties = {
			fontFamilyOption: fontFamily,
			fontColor: fontColor,
			backgroundColor: bgColor,
			contentWidth: contentWidth,
			fontSizeOption: fontSize,
		};
		setProps(properties);
	}

	return (
		<div ref={formRef}>
			<ArrowButton isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
			<aside
				className={`${styles.container} ${
					isOpen ? styles.container_open : ''
				}`}>
				<form
					onSubmit={handleSubmit}
					onReset={setPropsToDefault}
					className={styles.form}>
					<Text
						weight={800}
						uppercase={true}
						size={31}
						align='left'
						family='open-sans'>
						Задайте параметры
					</Text>
					<Select
						title={'Шрифт'}
						selected={fontFamily}
						options={fontFamilyOptions}
						onChange={setFontFamily}></Select>
					<RadioGroup
						name='fontSize'
						title='Размер шрифта'
						selected={fontSize}
						options={fontSizeOptions}
						onChange={setFontSize}></RadioGroup>
					<Select
						title='Цвет шрифта'
						selected={fontColor}
						options={fontColors}
						onChange={setFontColor}></Select>
					<Separator></Separator>
					<Select
						title='Цвет фона'
						selected={bgColor}
						options={backgroundColors}
						onChange={setBgColor}></Select>
					<Select
						title='Ширина контента'
						selected={contentWidth}
						options={contentWidthArr}
						onChange={setContentWidth}></Select>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</div>
	);
};
