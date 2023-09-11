import BookInfo from './Components/Book/BookInfo/BookInfo';
import { BookList } from './Components/BookList';
import { Container } from './Components/Container';
import { Header } from './Components/Header/Header';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchBooks } from './store/reducers/ActionCreators';
import { bookInfoSlice } from './store/reducers/BookInfoSlice';
import { paginationSlice } from './store/reducers/PaginationSlice';

function App() {
	const dispatch = useAppDispatch()
	const { query, selectedCategory, selectedSorting } = useAppSelector(state => state.search);
	const { books, isLoading, error } = useAppSelector(state => state.fetch)
	const { indexPage } = useAppSelector(state => state.pagination);
	const { setIndexPage } = paginationSlice.actions
	const { book, isShow } = useAppSelector(state => state.bookInfo)
	const { setBookInfo, setBookInfoShow } = bookInfoSlice.actions


	const handleSearch = () => {
		dispatch(fetchBooks(query, selectedCategory, selectedSorting, indexPage))
	};
	const handleLoadMore = () => {
		const newPageIndex = indexPage + 30;
		dispatch(setIndexPage(newPageIndex));
		dispatch(fetchBooks(query, selectedCategory, selectedSorting, newPageIndex));
	}

	const showBookInfo = (book) => {
		dispatch(setBookInfo(book));
		dispatch(setBookInfoShow())
	}

	return (
		<>
			<Container>
				<Header query={query}
					onSearch={handleSearch}
					selectedCategory={selectedCategory}
					selectedSorting={selectedSorting} />
				{isLoading && <span className="loader"></span>}
				{error && <p>{error}</p>}
				{!book && books && Object.keys(books).length > 0 && (
					<BookList showBookInfo={showBookInfo} onLoadMore={handleLoadMore} books={books} />
				)}
				{book && isShow && (
					<BookInfo book={book} />
				)}
			</Container>
		</>
	);
}

export default App;
