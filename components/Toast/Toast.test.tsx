import { render, /* screen */ } from '@testing-library/react';
import Toast from '.';
// import data from './Toast.data';

describe('<Toast />', () => {
    it('Renders an empty Toast', () => {
        render(<Toast />);
    });

    // it('Renders Toast with data', () => {
    //     const { container } = render(<Toast {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
