import React from 'react';
import styles from './title.module.sass';

interface ITitleProps {
	name: string
}

export function Title({ name }: ITitleProps) {
	return (
		<h1 className={styles.title}>{name}</h1>
	);
}
