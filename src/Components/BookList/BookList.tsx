import React from 'react';
import styles from './booklist.module.sass';
import { IBook, IBooks } from '../../models/IBook';
import { Book } from '../Book/Book';

interface IBooksListProps {
	books: IBooks
	onLoadMore: () => void
	showBookInfo: (book: IBook) => void;
}

export function BookList({ books, onLoadMore, showBookInfo }: IBooksListProps) {
	const bookItems = books.items;
	const totalBooks = books?.totalItems || 0;
	const handleLoadMore = () => {
		onLoadMore()
	};
	const handleBookInfo = (book: IBook) => {
		showBookInfo(book);
	};

	return (
		<div className={styles.booksContainer}>
			{totalBooks && <h3 className={styles.booksFound}>Found {totalBooks} results</h3>}
			<ul className={styles.booksList}>
				{bookItems.map((book) => (
					<Book key={book.etag} book={book} onClickBook={() => handleBookInfo(book)} />
				))
				}
			</ul>
			{30 < totalBooks && (
				<button onClick={handleLoadMore} className={styles.loadMoreButton}>
					load more
				</button>
			)}
		</div>
	);
}






