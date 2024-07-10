import { render, /* screen */ } from '@testing-library/react';
import Footer from '.';
// import data from './Footer.data';

describe('<Footer />', () => {
    it('Renders an empty Footer', () => {
        render(<Footer />);
    });

    // it('Renders Footer with data', () => {
    //     const { container } = render(<Footer {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
