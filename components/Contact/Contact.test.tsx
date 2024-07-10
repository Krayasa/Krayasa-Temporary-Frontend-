import { render, /* screen */ } from '@testing-library/react';
import Contact from '.';
// import data from './Contact.data';

describe('<Contact />', () => {
    it('Renders an empty Contact', () => {
        render(<Contact />);
    });

    // it('Renders Contact with data', () => {
    //     const { container } = render(<Contact {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
