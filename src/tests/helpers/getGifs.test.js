import { getGifs } from '../../helpers/getGifs';

describe('Pruebas en el helper getGifs Fetch', () => {
	test('la peticion debe de traer 9 gifs', async () => {
		const gifs = await getGifs('Supergirl');

		expect(gifs.length).toBe(9);
	});

	test('si no se manda string vacio debe retornar 0', async () => {
		const gifs = await getGifs('');

		expect(gifs.length).toBe(0);
	});

	test('si no se manda undefined devuelve 9', async () => {
		const gifs = await getGifs();

		expect(gifs.length).not.toBe(0);
	});
});
