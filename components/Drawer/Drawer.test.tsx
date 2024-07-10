import { render, /* screen */ } from '@testing-library/react';
import Drawer from '.';
// import data from './Drawer.data';

describe('<Drawer />', () => {
    it('Renders an empty Drawer', () => {
        render(<Drawer />);
    });

    // it('Renders Drawer with data', () => {
    //     const { container } = render(<Drawer {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
