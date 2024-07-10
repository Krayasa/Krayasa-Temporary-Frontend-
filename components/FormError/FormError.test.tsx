import { render, /* screen */ } from '@testing-library/react';
import FormError from '.';
// import data from './FormError.data';

describe('<FormError />', () => {
    it('Renders an empty FormError', () => {
        render(<FormError />);
    });

    // it('Renders FormError with data', () => {
    //     const { container } = render(<FormError {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
