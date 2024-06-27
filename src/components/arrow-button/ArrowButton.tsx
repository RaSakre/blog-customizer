import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = {
	isOpen: boolean;
	setIsOpen: () => void;
};
export const ArrowButton = ({ isOpen, setIsOpen }: OnClick) => {
	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, isOpen ? styles.container_open : '')}
			onClick={setIsOpen}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, isOpen ? styles.arrow_open : '')}
			/>
		</div>
	);
};
