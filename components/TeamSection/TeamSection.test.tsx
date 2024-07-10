import { render, /* screen */ } from '@testing-library/react';
import TeamSection from '.';
// import data from './TeamSection.data';

describe('<TeamSection />', () => {
    it('Renders an empty TeamSection', () => {
        render(<TeamSection />);
    });

    // it('Renders TeamSection with data', () => {
    //     const { container } = render(<TeamSection {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
