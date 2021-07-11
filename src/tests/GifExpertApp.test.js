import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en componente principal <GifExpertApp />', () => {
	const wrapper = shallow(<GifExpertApp />);

	test('Debe de hacer match con snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Should render the categories in GifGrid components', () => {
		const defCategories = ['Marvel', 'DC Comics'];
		const wrapper = shallow(<GifExpertApp defaultCategories={defCategories} />);
		expect(wrapper).toMatchSnapshot();

		expect(wrapper.find('GifGrid').length).toBe(defCategories.length);
	});

	test('Should render two hr and one <CategoryAdd/> component', () => {
		expect(wrapper.find('hr').length).toBeGreaterThan(1);
		expect(wrapper.find('CategoryAdd').exists()).toBeTruthy();
	});
});
