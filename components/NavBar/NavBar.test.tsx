import { render, /* screen */ } from '@testing-library/react';
import NavBar from '.';
// import data from './NavBar.data';

describe('<NavBar />', () => {
    it('Renders an empty NavBar', () => {
        render(<NavBar />);
    });

    // it('Renders NavBar with data', () => {
    //     const { container } = render(<NavBar {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
