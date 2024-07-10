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
      __typename?: 'FeatureSection';
      id?: string | null;
      blockType: string;
      field: string;
      heading?: string | null;
      description?: string | null;
      hash?: string | null;
      image?: ImageFragment | null;
      features?: Array<FeatureBlockFragment> | null;
  };
};

export type HeroSectionFragment = {
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
      __typename?: 'ArticleSection';
      blockType: string;
      heading?: string | null;
      description?: string | null;
      articles?: Array<ArticleBlockFragment> | null;
  }
};

export type LogoCloudBlockFragment = {
  country?: string | null;
  image?: ImageFragment | null;
};

export type LogoCloudSectionFragment = {
  type?: 'logo_cloud_section';
  data: {
      description?: string | null;
      countries?: Array<LogoCloudBlockFragment> | null;
  }

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
  }
};
