/**
 * Realiza la peticion para traer 9 gifs
 */
export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=9&api_key=zrE65QeG297xnvsvBATfWECzmBnxNEhP`;

	const response = await fetch(url);
	const { data } = await response.json();

	const gifs = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url,
		};
	});

	// console.log(gifs);

	// setImages(gifs);

	return gifs;
};
