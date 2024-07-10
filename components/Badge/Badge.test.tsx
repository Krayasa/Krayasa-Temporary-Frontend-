import { render, /* screen */ } from '@testing-library/react';
import Badge from '.';
// import data from './Badge.data';

describe('<Badge />', () => {
    it('Renders an empty Badge', () => {
        render(<Badge />);
    });

    // it('Renders Badge with data', () => {
    //     const { container } = render(<Badge {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
