import React from 'react';

import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
	//ahora usando el custom hook y renombrando la data
	const { data: gifImages, loading } = useFetchGifs(category);

	return (
		<>
			<hr />
			<h3 className='animate__animated animate__bounceIn animate__slow'>{category}</h3>
			{/* UNa manera de hacer la condicion para mostrar cargando: */}
			{/* {loading ? <p>Loading ...</p> : null} */}
			{/* Segunda manera, mas eficiente, operador ampersant */}
			{loading && <p className='animate__animated animate__flash animate__repeat-2'>Loading ...</p>}
			{/* --------------- */}
			<div className='card-grid'>
				{gifImages.map((imagen) => {
					// return <GifGridItem key={imagen.id} img={imagen} />;
					// otra manera de hacerlo con el operador spread que los envia como un obj {} para luego destructurar
					return <GifGridItem key={imagen.id} {...imagen} />;
				})}
			</div>
		</>
	);
};

export default GifGrid;
