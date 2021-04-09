/* Core */
import { shallow } from 'enzyme';

/* Core */
import BlogItem from './blogItem';

describe('Layout component', () => {
    const mockProps = {
        pageContext: {
            data: {
                title: 'mock title',
                content: 'mock content',
                href: 'google.com',
            },
        },
    };

    it('should render', () => {
        const wrapper = shallow(<BlogItem {...mockProps} />);

        expect(wrapper);
    });
});
