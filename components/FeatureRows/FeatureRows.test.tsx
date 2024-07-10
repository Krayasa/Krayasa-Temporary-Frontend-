import { render, /* screen */ } from '@testing-library/react';
import FeatureRows from '.';
// import data from './FeatureRows.data';

describe('<FeatureRows />', () => {
    it('Renders an empty FeatureRows', () => {
        render(<FeatureRows />);
    });

    // it('Renders FeatureRows with data', () => {
    //     const { container } = render(<FeatureRows {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
