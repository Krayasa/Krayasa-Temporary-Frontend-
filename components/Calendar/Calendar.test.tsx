import { render, /* screen */ } from '@testing-library/react';
import Calendar from '.';
// import data from './Calendar.data';

describe('<Calendar />', () => {
    it('Renders an empty Calendar', () => {
        render(<Calendar />);
    });

    // it('Renders Calendar with data', () => {
    //     const { container } = render(<Calendar {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
