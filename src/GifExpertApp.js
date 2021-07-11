import React, { useState } from 'react';
import PropTypes from 'prop-types';

//componentes propios
import CategoryAdd from './components/CategoryAdd';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({ defaultCategories }) => {
	// asi no se hace
	// const categories = ['OnePunchMan', 'Samurai', 'Harry Potter', 'Dragon Ball'];
	//asi si
	const [categories, setCategories] = useState(defaultCategories);

	// const handleAdd = () => {
	// 	// setCategories([...categories, 'Hell Boy']);

	// 	//Otra manera

	// 	setCategories((catgs) => {
	// 		return [...catgs, 'Hell Boy'];
	// 	});
	// };

	return (
		<>
			<h2>Gif Expert App</h2>
			<hr />
			<CategoryAdd setCategories={setCategories} />
			<hr />

			{/* <button onClick={handleAdd}>Agregar categoria</button> */}

			<ol>
				{categories.map((category) => (
					<GifGrid key={category} category={category} />
					// <li key={category}> {category} </li>
				))}
			</ol>
		</>
	);
};

GifExpertApp.propTypes = {
	defaultCategories: PropTypes.array,
};

GifExpertApp.defaultProps = {
	defaultCategories: ['Spider man'],
};

export default GifExpertApp;
