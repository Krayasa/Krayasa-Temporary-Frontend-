import { render, /* screen */ } from '@testing-library/react';
import MobileJobView from '.';
// import data from './MobileJobView.data';

describe('<MobileJobView />', () => {
    it('Renders an empty MobileJobView', () => {
        render(<MobileJobView />);
    });

    // it('Renders MobileJobView with data', () => {
    //     const { container } = render(<MobileJobView {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
