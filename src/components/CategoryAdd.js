import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CategoryAdd = ({ setCategories }) => {
	//
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (inputValue.trim().length > 2) {
			setCategories((prevCats) => [inputValue, ...prevCats]);
			//limpiar el input
			setInputValue('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h3>Write a category and hit ENTER :D</h3>
			<h4>Current category :: {inputValue}</h4>
			<input type='text' value={inputValue} onChange={handleInputChange} placeholder='Pets'></input>
		</form>
	);
};

CategoryAdd.propTypes = {
	setCategories: PropTypes.func.isRequired,
};

export default CategoryAdd;
