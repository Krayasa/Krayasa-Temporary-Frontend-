import { render, /* screen */ } from '@testing-library/react';
import Card from '.';
// import data from './Card.data';

describe('<Card />', () => {
    it('Renders an empty Card', () => {
        render(<Card />);
    });

    // it('Renders Card with data', () => {
    //     const { container } = render(<Card {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
