import { render, /* screen */ } from '@testing-library/react';
import EmployerProfile from '.';
// import data from './EmployerProfile.data';

describe('<EmployerProfile />', () => {
    it('Renders an empty EmployerProfile', () => {
        render(<EmployerProfile />);
    });

    // it('Renders EmployerProfile with data', () => {
    //     const { container } = render(<EmployerProfile {...data} />);
    //     expect(container).toMatchSnapshot();
    // });j
});
