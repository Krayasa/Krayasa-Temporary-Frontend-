import { render, /* screen */ } from '@testing-library/react';
import Social from '.';
// import data from './Social.data';

describe('<Social />', () => {
    it('Renders an empty Social', () => {
        render(<Social />);
    });

    // it('Renders Social with data', () => {
    //     const { container } = render(<Social {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
