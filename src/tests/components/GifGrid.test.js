import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { rawGifs } from '../data/gifs-examples';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en componente <GifGrid />', () => {
	const category = 'Marvel';
	const apiGifs = rawGifs;

	test('Debe coincidir el snapshot cuando no se han cargado gifs', () => {
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true,
		});

		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe de coincidir snapshots cuando ya se han cargado gifs', () => {
		useFetchGifs.mockReturnValue({
			data: apiGifs,
			loading: false,
		});

		const envoltorio = shallow(<GifGrid category={category} />);
		expect(envoltorio).toMatchSnapshot();
	});

	test('Si ya termino de cargar los gifs, el parrafo de loading no se deberia mostrar', () => {
		useFetchGifs.mockReturnValue({
			data: apiGifs,
			loading: false,
		});

		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper.find('p').exists()).toBeFalsy();
	});

	test('Debe de mostrar tantos gifs como vengan (9)', () => {
		useFetchGifs.mockReturnValue({
			data: apiGifs,
			loading: false,
		});

		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper.find('GifGridItem').length).toBe(apiGifs.length);
	});

	test('El primer GifGridItem debe de tener el id del primer elemento de la lista de gifs', () => {
		useFetchGifs.mockReturnValue({ data: apiGifs, loading: false });
		const wrapper = shallow(<GifGrid category={category} />);

		const firstGifGridItem = wrapper.find('GifGridItem').first();
		expect(firstGifGridItem.prop('id')).toBe(apiGifs[0].id);
	});

	test('Debe de mostrar la categoria en el h3', () => {
		useFetchGifs.mockReturnValue({ data: [], loading: true });
		const wrapper = shallow(<GifGrid category={category} />);

		expect(wrapper.find('h3').text()).toBe(category);
	});

	test('El h3 de la categoria y el p de loading deben tener al menos una clase animate', () => {
		useFetchGifs.mockReturnValue({ data: [], loading: true });
		const wrapper = shallow(<GifGrid category={category} />);
		const p = wrapper.find('p');

		expect(p.exists()).toBeTruthy();
		expect(p.hasClass(/animate(\w|\d)*/)).toBeTruthy();
		expect(wrapper.find('h3').hasClass(/animate(\w|\d)*/)).toBeTruthy();
	});
});
