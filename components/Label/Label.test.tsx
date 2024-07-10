import { render, /* screen */ } from '@testing-library/react';
import Label from '.';
// import data from './Label.data';

describe('<Label />', () => {
    it('Renders an empty Label', () => {
        render(<Label />);
    });

    // it('Renders Label with data', () => {
    //     const { container } = render(<Label {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
