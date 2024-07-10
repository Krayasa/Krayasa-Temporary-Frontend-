import { render, /* screen */ } from '@testing-library/react';
import LinkedInAnalytics from '.';
// import data from './LinkedInAnalytics.data';

describe('<LinkedInAnalytics />', () => {
    it('Renders an empty LinkedInAnalytics', () => {
        render(<LinkedInAnalytics />);
    });

    // it('Renders LinkedInAnalytics with data', () => {
    //     const { container } = render(<LinkedInAnalytics {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
