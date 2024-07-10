import { render, /* screen */ } from '@testing-library/react';
import Faq from '.';
// import data from './Faq.data';

describe('<Faq />', () => {
    it('Renders an empty Faq', () => {
        render(<Faq />);
    });

    // it('Renders Faq with data', () => {
    //     const { container } = render(<Faq {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
