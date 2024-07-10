import { render, /* screen */ } from '@testing-library/react';
import Input from '.';
// import data from './Input.data';

describe('<Input />', () => {
    it('Renders an empty Input', () => {
        render(<Input />);
    });

    // it('Renders Input with data', () => {
    //     const { container } = render(<Input {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
