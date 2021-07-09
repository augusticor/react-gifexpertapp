import { shallow } from 'enzyme';

import CategoryAdd from '../../components/CategoryAdd';

describe('Pruebas en componente <CategoryAdd />', () => {
	const setCategories = jest.fn();

	let wrapper = shallow(<CategoryAdd setCategories={setCategories} />);

	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(<CategoryAdd setCategories={setCategories} />);
	});

	test('Debe coincidir con el snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe de cambiar la caja de texto a lo que el usuario escriba en el input', () => {
		const input = wrapper.find('input');

		const value = 'Reactjs';
		const event = { target: { value } };

		input.simulate('change', event);

		const categoryInfoText = wrapper.find('h4');

		const [, writtenCategory] = categoryInfoText.text().split('::');

		expect(writtenCategory.trim()).toBe(value);
	});

	test('NO se debe llamar la funcion si no hay categoria escrita', () => {
		// una forma corta de mandar una funcion
		// wrapper.find('form').simulate('submit', { preventDefault: () => {} }); //simula el submit de el formulario
		wrapper.find('form').simulate('submit', { preventDefault() {} }); //simula el submit de el formulario

		// verificar que la funcion {setCategories} no se llame, porque no hay ningun inputvalue
		expect(setCategories).not.toHaveBeenCalled();
	});

	test('Debe de llamar el setCategories y limpiar el input de texto', () => {
		const input = wrapper.find('input');
		const value = 'Reading';

		//simula el cambio
		input.simulate('change', { target: { value } });

		//simula el submit
		wrapper.find('form').simulate('submit', { preventDefault() {} });

		expect(setCategories).toHaveBeenCalled();

		expect(input.prop('value')).toBe('');
	});

	test('Debe de llamarse una funcion callback cuando se llame setCategories', () => {
		const value = 'Reading';
		wrapper.find('input').simulate('change', { target: { value } });
		wrapper.find('form').simulate('submit', { preventDefault() {} });

		expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
	});
});
