import { render, /* screen */ } from '@testing-library/react';
import Features from '.';
// import data from './Features.data';

describe('<Features />', () => {
    it('Renders an empty Features', () => {
        render(<Features />);
    });

    // it('Renders Features with data', () => {
    //     const { container } = render(<Features {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
