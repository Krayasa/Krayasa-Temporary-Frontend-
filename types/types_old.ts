export type ButtonBlockFragment = {
    __typename: 'ButtonBlock';
    text?: string | null;
    link?: string | null;
};

export type ImageFragment = {
    __typename?: 'CustomImage';
    id?: string | null;
    title: string;
    file: string;
    width: number;
    height: number;
    createdAt: any;
    fileSize?: number | null;
    fileHash: string;
    aspectRatio: number;
    sizes: string;
    isSvg: boolean;
    url: string;
};

export type CarouselImageBlockFragment = {
    __typename: 'CarouselImageBlock';
    description?: string | null;
    heading?: string | null;
    image?: ImageFragment | null;
};

export type CarouselSectionFragment = {
    data: {
        __typename: 'CarouselSection';
        heading?: string | null;
        description?: string | null;
        hash?: string | null;
        images?: Array<CarouselImageBlockFragment | null> | null;
    };
};

export type FaqBlockFragment = {
    __typename?: 'FaqBlock';
    question?: string | null;
    answer?: string | null;
    button?: ButtonBlockFragment | null;
};

export type FaqSectionFragment = {
    data: {
        __typename?: 'FaqSection';
        heading?: string | null;
        description?: string | null;
        faqs?: Array<FaqBlockFragment | null> | null;
    };
};

export type FeatureBlockFragment = {
    __typename: 'FeatureBlock';
    blockType: string;
    field: string;
    heading?: string | null;
    description?: string | null;
    image?: ImageFragment | null;
    button?: ButtonBlockFragment | null;
};

export type FeatureSectionFragment = {
    data: {
        image: any;
        __typename?: 'FeatureSection';
        id?: string | null;
        blockType: string;
        field: string;
        heading?: string | null;
        hash?: string | null;
        features?: Array<FeatureBlockFragment> | null;
    };
};

export type FeatureRowSectionFragment = {
    data: {
        __typename?: 'FeatureRowSection';
        id?: string | null;
        blockType: string;
        field: string;
        heading?: string | null;
        description?: string | null;
        longdescription?: string | null;
        hash?: string | null;
        image?: ImageFragment | null;
        features?: Array<FeatureBlockFragment> | null;
    };
};

export type HeroSectionFragment = {
    image: any;
    heading: any;
    description: any;
    button: any;
    data: {
        __typename?: 'HeroSection';
        id?: string | null;
        blockType: string;
        field: string;
        heading?: string | null;
        description?: string | null;
        hash?: string | null;
        image?: ImageFragment | null;
        button?: ButtonBlockFragment | null;
    };
};

export type TeamMemberBlockFragment = {
    __typename: 'TeamMemberBlock';
    name?: string | null;
    role?: string | null;
    biography?: string | null;
    linkedin?: string | null;
    twitter?: string | null;
    image?: ImageFragment | null;
};

export type TeamSectionFragment = {
    data: {
        __typename?: 'TeamSection';
        heading?: string | null;
        description?: string | null;
        members?: Array<TeamMemberBlockFragment> | null;
    };
};

export type TestimonialBlockFragment = {
    __typename?: 'TestimonialBlock';
    name?: string | null;
    role?: string | null;
    organisation?: string | null;
    quote?: string | null;
    stars?: string | null;
    image?: ImageFragment | null;
};

export type TestimonialSectionFragment = {
    data: {
        __typename?: 'TestimonialSection';
        heading?: string | null;
        description?: string | null;
        testimonials?: Array<TestimonialBlockFragment | null> | null;
    };
};

export type ArticleBlockFragment = {
    __typename?: 'ArticleBlock';
    blockType: string;
    category?: string | null;
    heading?: string | null;
    description?: string | null;
    image?: ImageFragment | null;
};

export type ArticleSectionFragment = {
    data: {
        image: any;
        __typename?: 'ArticleSection';
        blockType: string;
        heading?: string | null;
        description?: string | null;
        articles?: Array<ArticleBlockFragment> | null;
    };
};

export type LogoCloudBlockFragment = {
    __typename?: 'LogoCloudBlock';
    blockType: string;
    country?: string | null;
    image?: ImageFragment | null;
};

export type LogoCloudSectionFragment = {
    data: {
        __typename?: 'LogoCloudSection';
        blockType: string;
        description?: string | null;
        countries?: Array<LogoCloudBlockFragment> | null;
    };
};

export type ContactSectionFragment = {
    data: {
        __typename: 'ContactSection';
        heading?: string | null;
        description?: string | null;
        location1?: string | null;
        location2?: string | null;
        phone?: string | null;
        email?: string | null;
        button?: ButtonBlockFragment | null;
    };
};

export type CreateJobMutationInput = {
    tags: [Number];
    title: String;
    description: String;
    location: String;
    type: String;
    category: String;
    lastDate: Date;
    companyName: String;
    companyDescription: String;
    website: String;
    salary: Number;
    vacancy: Number;
};

export type JobCreateResponse = {
    success: Boolean;
    errors: [String];
};

export type UpdateJobMutationInput = {
    tags: [number];
    pk: string;
    title: string;
    description: string;
    location: string;
    type: string;
    category: string;
    lastDate: string;
    companyName: string;
    companyDescription: string;
    website: string;
    salary: number;
    vacancy: number;
};

export type JobUpdateResponse = {
    success: boolean;
    errors: [string];
};

export type EmployeeRegisterMutationInput = {
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    password1: string;
    password2: string;
};

export type EmployeeRegistrationResponse = {
    success: boolean;
    errors: [string];
};

export type EmployerRegisterMutationInput = {
    companyName: string;
    companyAddress: string;
    email: string;
    password1: string;
    password2: string;
};

export type EmployerRegistrationResponse = {
    success: boolean;
    errors: [string];
};

export type LoginMutationInput = {
    email: string | undefined;
    password: string | undefined;
};

export type LoginResponse = {
    token: string;
    refreshExpiresIn: number;
    payload: string;
};

export interface JobData {
    user: {
        first_name: string;
        last_name: string;
    };
    id: number;
    title: string;
    description: string;
    location: string;
    website: string;
    type: string;
    category: string;
    salary: string;
    vacancy: number;
    last_date: string;
    company_name: string;
    company_description: string;
    created_at: string;
    filled: boolean;
}

export interface JobViewProps {
    jobs?: JobData[];
    job?: JobData;
}
