import { render, /* screen */ } from '@testing-library/react';
import Pagination from '.';
// import data from './Pagination.data';

describe('<Pagination />', () => {
    it('Renders an empty Pagination', () => {
        render(<Pagination />);
    });

    // it('Renders Pagination with data', () => {
    //     const { container } = render(<Pagination {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
