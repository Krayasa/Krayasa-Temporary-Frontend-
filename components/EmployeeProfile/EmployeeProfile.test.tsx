import { render, /* screen */ } from '@testing-library/react';
import EmployeeProfile from '.';
// import data from './EmployeeProfile.data';

describe('<EmployeeProfile />', () => {
    it('Renders an empty EmployeeProfile', () => {
        render(<EmployeeProfile />);
    });

    // it('Renders EmployeeProfile with data', () => {
    //     const { container } = render(<EmployeeProfile {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
