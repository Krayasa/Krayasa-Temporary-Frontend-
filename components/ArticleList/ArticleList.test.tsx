import { render, /* screen */ } from '@testing-library/react';
import ArticleList from '.';
// import data from './ArticleList.data';

describe('<ArticleList />', () => {
    it('Renders an empty ArticleList', () => {
        render(<ArticleList />);
    });

    // it('Renders ArticleList with data', () => {
    //     const { container } = render(<ArticleList {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
