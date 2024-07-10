import { render, /* screen */ } from '@testing-library/react';
import LoginBtn from '.';
// import data from './LoginBtn.data';

describe('<LoginBtn />', () => {
    it('Renders an empty LoginBtn', () => {
        render(<LoginBtn />);
    });

    // it('Renders LoginBtn with data', () => {
    //     const { container } = render(<LoginBtn {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
