import { render, /* screen */ } from '@testing-library/react';
import DropDownMenu from '.';
// import data from './DropDownMenu.data';

describe('<DropDownMenu />', () => {
    it('Renders an empty DropDownMenu', () => {
        render(<DropDownMenu />);
    });

    // it('Renders DropDownMenu with data', () => {
    //     const { container } = render(<DropDownMenu {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
