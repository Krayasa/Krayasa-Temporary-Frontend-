import { render, /* screen */ } from '@testing-library/react';
import FadeIn from '.';
// import data from './FadeIn.data';

describe('<FadeIn />', () => {
    it('Renders an empty FadeIn', () => {
        render(<FadeIn />);
    });

    // it('Renders FadeIn with data', () => {
    //     const { container } = render(<FadeIn {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
