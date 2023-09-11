import React from 'react';
import styles from './book.module.sass';
import { IBook } from '../../models/IBook';

interface IBookProps {
	book: IBook
	onClickBook: (book) => void
}

export function Book({ book, onClickBook }: IBookProps) {

	const handleClickBook = () => {
		onClickBook(book);
	};

	return (
		<li key={book.etag} className={styles.bookItem} onClick={handleClickBook}>
			{book.volumeInfo.imageLinks && (
				<img
					className={styles.bookPoster}
					src={book.volumeInfo.imageLinks.thumbnail}
					alt={`Обложка книги ${book.volumeInfo.title}`}
				/>
			)}
			<div className={styles.bookInfo}>
				<p className={styles.bookCategories}>{book.volumeInfo.categories?.[0] || ''}</p>
				<h3 className={styles.bookTitle}>{book.volumeInfo.title || ''}</h3>
				<p className={styles.bookAuthor}>{book.volumeInfo.authors?.join(', ') || ''}</p>
			</div>
		</li>
	);
}
