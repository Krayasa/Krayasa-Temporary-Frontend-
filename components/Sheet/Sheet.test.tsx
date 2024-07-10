import { render, /* screen */ } from '@testing-library/react';
import Sheet from '.';
// import data from './Sheet.data';

describe('<Sheet />', () => {
    it('Renders an empty Sheet', () => {
        render(<Sheet />);
    });

    // it('Renders Sheet with data', () => {
    //     const { container } = render(<Sheet {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
