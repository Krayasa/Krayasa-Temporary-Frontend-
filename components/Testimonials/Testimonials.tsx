import Image from "next/image";
import { FadeIn, FadeInStagger } from "../FadeIn/FadeIn";
import { TestimonialBlockFragment, TestimonialSectionFragment } from "../../types/types_old";



export default function Testimonials({ data }: TestimonialSectionFragment) {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-orange-400">
            {data.heading}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-50 sm:text-4xl">
            {data.description}
          </p>
        </FadeIn>
        <FadeInStagger faster className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3 ">
            {data.testimonials?.map(
              (testimonial, index: number) => (
                <FadeIn
                  key={testimonial?.image?.id}
                  className="pt-8 sm:inline-block sm:w-full sm:px-4"
                >
                  <figure className="rounded-2xl bg-gray-50 p-8 text-base leading-6 dark:bg-gray-800">
                    <blockquote className="text-gray-900 dark:text-slate-50">
                      <p>{`“${testimonial?.quote}”`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <Image
                        className="h-10 w-10 rounded-full bg-gray-50"
                        // src={testimonial.image.file}
                        src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                        alt={
                          testimonial?.image?.title ?? "SpeedWings HHuman Resource- Best Recruitment agency for blue collar jobs"
                        }
                        width={testimonial?.image?.width}
                        height={testimonial?.image?.height}
                      />

                      <div className="font-semibold text-gray-900 dark:text-slate-50">
                        {testimonial?.name}
                      </div>
                    </figcaption>
                  </figure>
                </FadeIn>
              )
            )}
          </div>
        </FadeInStagger>
      </div>
    </div>
  );
}