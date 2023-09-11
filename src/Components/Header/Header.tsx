import React from 'react';
import styles from './header.module.sass';
import { Title } from '../Title/Title';
import { SearchInput } from '../Search/SearchInput/SearchInput';
import { SearchSelect } from '../Search/SearchSelect';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSelectedCategory, setSelectedSorting } from '../../store/reducers/SearchSlice';

interface SearchBooksProps {
	query: string;
	onSearch: () => void;
	selectedCategory: string;
	selectedSorting: string;
}

const categories = {
	all: 'All',
	books: 'Books',
	magazines: 'Magazines',
};

const sorting = {
	relevance: 'Relevance',
	newest: 'Newest',
};

export function Header({
	query,
	onSearch,
}: SearchBooksProps) {
	const dispatch = useAppDispatch();
	const selectedCategory = useAppSelector(state => state.search.selectedCategory);
	const selectedSorting = useAppSelector(state => state.search.selectedSorting);

	const handleCategoryChange = (category: string) => {
		dispatch(setSelectedCategory(category));
	};

	const handleSortingChange = (sortingValue: string) => {
		dispatch(setSelectedSorting(sortingValue));
	};
	return (
		<>
			<div className={styles.searchContainer}>
				<Title name="Search for books" />
				<SearchInput query={query} onSearch={onSearch} />
				<div className={styles.searchSelectGroup}>
					<SearchSelect
						label="Categories"
						htmlFor="categorySelect"
						options={categories}
						selectedValue={selectedCategory}
						onValueChange={handleCategoryChange}
					/>
					<SearchSelect
						label="Sorting by"
						htmlFor="sortingSelect"
						options={sorting}
						selectedValue={selectedSorting}
						onValueChange={handleSortingChange}
					/>
				</div>
			</div>
		</>
	);
}
