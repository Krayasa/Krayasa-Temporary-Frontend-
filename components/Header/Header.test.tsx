import { render, /* screen */ } from '@testing-library/react';
import Header from '.';
// import data from './Header.data';

describe('<Header />', () => {
    it('Renders an empty Header', () => {
        render(<Header />);
    });

    // it('Renders Header with data', () => {
    //     const { container } = render(<Header {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
