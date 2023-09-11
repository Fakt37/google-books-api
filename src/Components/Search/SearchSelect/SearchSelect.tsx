import React, { ChangeEvent } from 'react';
import styles from './searchselect.module.sass';

interface ISearchSelectProps {
	selectedValue: string;
	label: string;
	options: Record<string, string>;
	htmlFor: string;
	onValueChange: (value: string) => void;
}

export function SearchSelect({
	selectedValue,
	label,
	options,
	htmlFor,
	onValueChange,
}: ISearchSelectProps) {
	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const newSelectedValue = e.target.value;
		onValueChange(newSelectedValue);
	};

	return (
		<div className={styles.searchSelect}>
			<label className={styles.searchSelectLabel} htmlFor={htmlFor}>
				{label}:
			</label>
			<select
				className={styles.searchSelectElem}
				id={htmlFor}
				value={selectedValue}
				onChange={handleChange}
			>
				{Object.entries(options).map(([key, value]) => (
					<option key={key} value={key}>
						{value}
					</option>
				))}
			</select>
		</div>
	);
}
