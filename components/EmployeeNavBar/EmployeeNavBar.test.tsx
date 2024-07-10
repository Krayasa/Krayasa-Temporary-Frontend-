import { render, /* screen */ } from '@testing-library/react';
import EmployeeNavBar from '.';
// import data from './EmployeeNavBar.data';

describe('<EmployeeNavBar />', () => {
    it('Renders an empty EmployeeNavBar', () => {
        render(<EmployeeNavBar />);
    });

    // it('Renders EmployeeNavBar with data', () => {
    //     const { container } = render(<EmployeeNavBar {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
