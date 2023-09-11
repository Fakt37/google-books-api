import React, { ChangeEvent, KeyboardEvent } from 'react';
import styles from './searchinput.module.sass';
import { useAppDispatch } from '../../../hooks/redux';
import { setQuery } from '../../../store/reducers/SearchSlice';
import { setBookInfo } from '../../../store/reducers/BookInfoSlice';

interface ISearchInputProps {
	query: string;
	onSearch: () => void;
}

export function SearchInput({ query, onSearch }: ISearchInputProps) {
	const dispatch = useAppDispatch();

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newQuery = e.target.value;
		dispatch(setQuery(newQuery));
	};

	const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			onSearch();
			dispatch(setBookInfo(null));
		}
	};

	return (
		<div className={styles.searchContainer}>
			<input
				className={styles.searchInput}
				type="text"
				placeholder="Поиск..."
				value={query}
				onChange={handleInputChange}
				onKeyDown={handleKeyPress}
			/>
			<button className={styles.searchButton} onClick={onSearch}>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path d="M18.39 17.98l-4.4-4.4a7 7 0 1 0-1.41 1.42l4.4 4.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM10 16a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
					<path fill="none" d="M0 0h24v24H0z" />
				</svg>
			</button>
		</div>
	);
}
