import { render, /* screen */ } from '@testing-library/react';
import NavigationMenu from '.';
// import data from './NavigationMenu.data';

describe('<NavigationMenu />', () => {
    it('Renders an empty NavigationMenu', () => {
        render(<NavigationMenu />);
    });

    // it('Renders NavigationMenu with data', () => {
    //     const { container } = render(<NavigationMenu {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
