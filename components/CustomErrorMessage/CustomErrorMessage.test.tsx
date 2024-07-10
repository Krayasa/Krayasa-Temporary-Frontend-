import { render, /* screen */ } from '@testing-library/react';
import CustomErrorMessage from '.';
// import data from './CustomErrorMessage.data';

describe('<CustomErrorMessage />', () => {
    it('Renders an empty CustomErrorMessage', () => {
        render(<CustomErrorMessage />);
    });

    // it('Renders CustomErrorMessage with data', () => {
    //     const { container } = render(<CustomErrorMessage {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
