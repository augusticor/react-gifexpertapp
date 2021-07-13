import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Testing on useFetchGifs custom hook', () => {
	const category = 'Dinosaur';
	const nextUpdateTimeoutMs = 2000;

	test('Should return the initial state {data: [], loading: true}', async () => {
		const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));
		const { data, loading } = result.current;

		await waitForNextUpdate({ timeout: nextUpdateTimeoutMs });

		expect(data).toEqual([]);
		expect(loading).toBeTruthy();
	});

	test('Should return the final state {data: [array of gifs], loading:false}', async () => {
		const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));

		await waitForNextUpdate({ timeout: nextUpdateTimeoutMs });

		const { data, loading } = result.current;

		expect(data.length).toBe(9);
		expect(loading).toBeFalsy();
	});
});
