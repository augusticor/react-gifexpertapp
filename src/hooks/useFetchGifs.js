// es una convencion que los hooks empiezen por use...
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
	// aca tambien se pueden usar hooks propios de react
	const [state, setState] = useState({
		data: [],
		loading: true,
	});

	// OJO el callback de use effect no puede ser async
	useEffect(() => {
		getGifs(category).then((gifs) => {
			setTimeout(() => {
				setState({
					data: gifs,
					loading: false,
				});
			}, 2000);
		});
	}, [category]);

	return state; // state es un objeto -> {data: [], loading: boolean}
};
