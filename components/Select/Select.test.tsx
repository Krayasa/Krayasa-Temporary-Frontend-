import { render, /* screen */ } from '@testing-library/react';
import Select from '.';
// import data from './Select.data';

describe('<Select />', () => {
    it('Renders an empty Select', () => {
        render(<Select />);
    });

    // it('Renders Select with data', () => {
    //     const { container } = render(<Select {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
