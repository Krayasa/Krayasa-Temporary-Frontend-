import { render, /* screen */ } from '@testing-library/react';
import Card-wrapper from '.';
// import data from './Card-wrapper.data';

describe('<Card-wrapper />', () => {
    it('Renders an empty Card-wrapper', () => {
        render(<Card-wrapper />);
    });

    // it('Renders Card-wrapper with data', () => {
    //     const { container } = render(<Card-wrapper {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
