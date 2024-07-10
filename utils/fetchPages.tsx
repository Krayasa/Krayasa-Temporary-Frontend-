export const fetchHomeContent = async () => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_WT_SWAGGER_API}/wt/api/nextjs/v1/page_by_path/?html_path=/krayasa`,
            {
                method: 'GET',
            }
        );
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching content', error);
        throw new Error('Failed to fetch data');
    }
};

export const fetchPageContent = async (slug) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_WT_SWAGGER_API}/wt/api/nextjs/v1/page_by_path/?html_path=/krayasa/${slug}`,
            {
                method: 'GET',
            }
        );
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching content', error);
        throw new Error('Failed to fetch data');
    }
};

export const fetchArticleContent = async (category, slug) => {
    var url;

    url = `${process.env.NEXT_PUBLIC_WT_SWAGGER_API}/wt/api/nextjs/v1/page_by_path/?html_path=/krayasa/${category}/${slug}`;

    try {
        const response = await fetch(
            url,
            // `http:localhost:8081/wt/api/nextjs/v1/page_by_path/?html_path=/areas-of-expertise/${category}/${slug}`,

            {
                method: 'GET',
            }
        );
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();

        return data;
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
};

export const fetchChildrenContent = async (category) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_WT_SWAGGER_API}/wt/api/nextjs/v1/show_children/?html_path=/krayasa/${category}`,
            // `http:localhost:8081/wt/api/nextjs/v1/page_by_path/?html_path=/areas-of-expertise/${category}/${slug}`,

            {
                method: 'GET',
            }
        );
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();

        return data;
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
};
