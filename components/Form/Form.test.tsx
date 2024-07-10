import { render, /* screen */ } from '@testing-library/react';
import Form from '.';
// import data from './Form.data';

describe('<Form />', () => {
    it('Renders an empty Form', () => {
        render(<Form />);
    });

    // it('Renders Form with data', () => {
    //     const { container } = render(<Form {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
