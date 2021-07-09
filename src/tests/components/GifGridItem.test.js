import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en componente <GifGridItem />', () => {
	// props de el componente
	const title = 'Mouse Rodent GIF';
	const url = 'https://media.giphy.com/media/QXh9XnIJetPi0/giphy.gif';

	const wrapper = shallow(<GifGridItem title={title} url={url} />);

	test('debe de mostrar el componente correctamente snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('debe de tener un parrafo con el title', () => {
		const paragraph = wrapper.find('p');

		expect(paragraph.text().trim()).toBe(title);
	});

	test('la imagen debe ser la url de los props y tener como alt el title', () => {
		const img = wrapper.find('img');

		const { src, alt } = img.props();

		expect(src).toBe(url);

		expect(alt).toBe(title);
	});

	test('el div contenedor debe tener la clase animate__slower', () => {
		const divWrapper = wrapper.find('div');
		expect(divWrapper.hasClass('animate__slower')).toEqual(true);
	});

	test('el div contenedor del componente debe tener al menos una clase animate...', () => {
		const divWrapper = wrapper.find('div');

		expect(divWrapper.hasClass(/animate(\w|\d)*/)).toBeTruthy();
	});
});
