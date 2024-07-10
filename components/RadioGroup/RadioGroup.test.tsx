import { render, /* screen */ } from '@testing-library/react';
import RadioGroup from '.';
// import data from './RadioGroup.data';

describe('<RadioGroup />', () => {
    it('Renders an empty RadioGroup', () => {
        render(<RadioGroup />);
    });

    // it('Renders RadioGroup with data', () => {
    //     const { container } = render(<RadioGroup {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
