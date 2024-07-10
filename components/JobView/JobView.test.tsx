import { render, /* screen */ } from '@testing-library/react';
import JobView from '.';
// import data from './JobView.data';

describe('<JobView />', () => {
    it('Renders an empty JobView', () => {
        render(<JobView />);
    });

    // it('Renders JobView with data', () => {
    //     const { container } = render(<JobView {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
