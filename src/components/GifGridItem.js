import React from 'react';

// destructuro el spread ...imagen que es un objeto en los props
const GifGridItem = ({ id, title, url }) => {
	// console.log(id, title, url);

	return (
		<div className='card animate__animated animate__fadeIn animate__slower'>
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};

export default GifGridItem;
