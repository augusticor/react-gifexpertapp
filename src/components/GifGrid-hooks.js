// aca tiene los hooks de useEffect y useState, mientras que en el otro tiene el custom

import React, { useEffect, useState } from 'react';

import GifGridItem from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

const GifGrid = ({ category }) => {
	//hook useState
	const [images, setImages] = useState([]);

	//hook useEffect
	useEffect(() => {
		// como el argumento del then es el argumento de setImages se puede llamar asi
		getGifs(category).then(setImages);
	}, [category]);

	return (
		<>
			<hr />
			<h3>{category}</h3>
			<div className='card-grid'>
				{images.map((imagen) => {
					// return <GifGridItem key={imagen.id} img={imagen} />;
					// otra manera de hacerlo con el operador spread para luego destructurar
					return <GifGridItem key={imagen.id} {...imagen} />;
				})}
			</div>
		</>
	);
};

export default GifGrid;
