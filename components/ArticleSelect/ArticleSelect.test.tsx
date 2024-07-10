import { render, /* screen */ } from '@testing-library/react';
import ArticleSelect from '.';
// import data from './ArticleSelect.data';

describe('<ArticleSelect />', () => {
    it('Renders an empty ArticleSelect', () => {
        render(<ArticleSelect />);
    });

    // it('Renders ArticleSelect with data', () => {
    //     const { container } = render(<ArticleSelect {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
