import { render, /* screen */ } from '@testing-library/react';
import FormSuccess from '.';
// import data from './FormSuccess.data';

describe('<FormSuccess />', () => {
    it('Renders an empty FormSuccess', () => {
        render(<FormSuccess />);
    });

    // it('Renders FormSuccess with data', () => {
    //     const { container } = render(<FormSuccess {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
