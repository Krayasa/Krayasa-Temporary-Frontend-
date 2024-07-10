import { render, /* screen */ } from '@testing-library/react';
import BackBtn from '.';
// import data from './BackBtn.data';

describe('<BackBtn />', () => {
    it('Renders an empty BackBtn', () => {
        render(<BackBtn />);
    });

    // it('Renders BackBtn with data', () => {
    //     const { container } = render(<BackBtn {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
