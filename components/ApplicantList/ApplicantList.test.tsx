import { render, /* screen */ } from '@testing-library/react';
import ApplicantList from '.';
// import data from './ApplicantList.data';

describe('<ApplicantList />', () => {
    it('Renders an empty ApplicantList', () => {
        render(<ApplicantList />);
    });

    // it('Renders ApplicantList with data', () => {
    //     const { container } = render(<ApplicantList {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
