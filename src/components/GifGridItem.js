import React from 'react';
import PropTypes from 'prop-types';

// destructuro el spread ...imagen que es un objeto en los props
const GifGridItem = ({ title, url }) => {
	// console.log(title, url);

	return (
		<div className='card animate__animated animate__fadeIn animate__slower'>
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};

GifGridItem.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};

export default GifGridItem;
