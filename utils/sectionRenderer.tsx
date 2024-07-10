import ArticleList from '@/components/ArticleList/ArticleList';
import Contact from '@/components/Contact/Contact';
import Pricing from '@/components/Faq/Faq';
import FeatureRow from '@/components/FeatureRows/FeatureRows';
import Features from '@/components/Features/Features';
import Hero from '@/components/Hero/Hero';
import LogoCloud from '@/components/LogoCloud/LogoCloud';
import Team from '@/components/TeamSection/TeamSection';
import Testimonials from '@/components/Testimonials/Testimonials';

export function sectionRenderer(data: any, section: any, index: string) {
    switch (section.type) {
        case 'hero_section':
            return <Hero key={index} data={section.value} />;
        case 'feature_section':
            return <Features key={index} data={section.value} />;
        case 'feature_row_section':
            return <FeatureRow key={index} data={section.value} />;
        case 'testimonial_section':
            return <Testimonials key={index} data={section.value} />;
        case 'faq_section':
            return <Pricing key={index} data={section.value} />;
        case 'team_section':
            return <Team key={index} data={section.value} />;
        case 'logo_cloud_section':
            return <LogoCloud key={index} data={section.value} />;
        case 'article_section':
            return (
                <ArticleList
                    key={index}
                    data={section.value}
                    category={data.component_props.title}
                    slug={data.slug}
                />
            );
        case 'contact_section':
            return <Contact key={index} data={section.value} />;
        // case "CarouselSection":
        //   return <CarouselSec key={index} data={section.value} />;
        // case "sections.statistics":
        //   return <Statistic key={index} data={section.value}/>;
        // case "sections.rich-text":
        //   return <PageRichText key={index} data={section.value} />;
        default:
            return null;
    }
}
