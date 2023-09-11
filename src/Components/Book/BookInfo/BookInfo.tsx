import React from 'react';
import styles from './bookinfo.module.sass';
import { setBookInfo } from '../../../store/reducers/BookInfoSlice';
import { useAppDispatch } from '../../../hooks/redux';

function BookInfo({ book }) {
	const dispatch = useAppDispatch()

	const closeBookInfo = () => {
		dispatch(setBookInfo(null));
	}
	return (
		<>
			<div className={styles.bookInfoContainer}>
				<div className={styles.bookInfoPoster}>
					<img
						className={styles.bookInfoImages}
						src={book.volumeInfo.imageLinks.thumbnail}
						alt={`Обложка книги ${book.volumeInfo.title}`}
					/>
				</div>
				<div className={styles.bookInfoText}>
					<p className={styles.bookInfoCategories}>{book.volumeInfo.categories}</p>
					<h3 className={styles.bookInfoTitle}>{book.volumeInfo.title}</h3>
					<p className={styles.bookInfoAuthors}>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
					<div className={styles.bookInfoDescriptionWrapper}>
						<p className={styles.bookInfoDescription}>{book.volumeInfo.description}</p>
					</div>
				</div>
				<button className={styles.buttonClose} onClick={closeBookInfo}>Закрыть</button>
			</div>
		</>
	);
}

export default BookInfo;
