import { render, /* screen */ } from '@testing-library/react';
import Toaster from '.';
// import data from './Toaster.data';

describe('<Toaster />', () => {
    it('Renders an empty Toaster', () => {
        render(<Toaster />);
    });

    // it('Renders Toaster with data', () => {
    //     const { container } = render(<Toaster {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
