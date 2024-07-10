import { render, /* screen */ } from '@testing-library/react';
import NoSessionJobView from '.';
// import data from './NoSessionJobView.data';

describe('<NoSessionJobView />', () => {
    it('Renders an empty NoSessionJobView', () => {
        render(<NoSessionJobView />);
    });

    // it('Renders NoSessionJobView with data', () => {
    //     const { container } = render(<NoSessionJobView {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
