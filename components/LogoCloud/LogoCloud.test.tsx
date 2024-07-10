import { render, /* screen */ } from '@testing-library/react';
import LogoCloud from '.';
// import data from './LogoCloud.data';

describe('<LogoCloud />', () => {
    it('Renders an empty LogoCloud', () => {
        render(<LogoCloud />);
    });

    // it('Renders LogoCloud with data', () => {
    //     const { container } = render(<LogoCloud {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
