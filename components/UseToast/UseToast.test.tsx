import { render, /* screen */ } from '@testing-library/react';
import UseToast from '.';
// import data from './UseToast.data';

describe('<UseToast />', () => {
    it('Renders an empty UseToast', () => {
        render(<UseToast />);
    });

    // it('Renders UseToast with data', () => {
    //     const { container } = render(<UseToast {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
