import { render, /* screen */ } from '@testing-library/react';
import Avatar from '.';
// import data from './Avatar.data';

describe('<Avatar />', () => {
    it('Renders an empty Avatar', () => {
        render(<Avatar />);
    });

    // it('Renders Avatar with data', () => {
    //     const { container } = render(<Avatar {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
