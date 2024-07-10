import { render, /* screen */ } from '@testing-library/react';
import Popover from '.';
// import data from './Popover.data';

describe('<Popover />', () => {
    it('Renders an empty Popover', () => {
        render(<Popover />);
    });

    // it('Renders Popover with data', () => {
    //     const { container } = render(<Popover {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
