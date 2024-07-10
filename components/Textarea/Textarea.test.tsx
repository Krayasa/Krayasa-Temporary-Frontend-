import { render, /* screen */ } from '@testing-library/react';
import Textarea from '.';
// import data from './Textarea.data';

describe('<Textarea />', () => {
    it('Renders an empty Textarea', () => {
        render(<Textarea />);
    });

    // it('Renders Textarea with data', () => {
    //     const { container } = render(<Textarea {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
