import Image from 'next/image';

import content from '@/utils/content.json';

import ImageCarousel from './Carousel';
import WhyMetacore from './WhyMetacore';

export const Homepage: FC = () => {
  return (
    <div className="mx-auto max-w-[1663px]">
      <div className="relative z-[0] mx-auto mt-[72px]">
        <Image
          className="z-[51] m-0 mx-auto hidden p-0 xxs:block"
          src="/img/homepage-shaded.jpg"
          alt="lesson"
          unoptimized
          width={1663}
          height={950.6}
          style={{ objectFit: 'cover' }}
        />

        <Image
          className="z-20 m-0 mx-auto block p-0 xxs:hidden"
          src="/img/homepage.jpg"
          alt="lesson"
          unoptimized
          width={1663}
          height={950.6}
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute left-0 top-1/2 z-[21] ml-0 hidden w-1/2 -translate-y-1/2 flex-col justify-start gap-2 rounded-2xl px-4 py-20 xxs:flex xs:ml-8 xs:bg-white/10 xs:py-6 sm:px-8 sm:py-10">
          <div className="flex flex-1 flex-col items-center justify-center gap-2 lg:gap-4">
            <h3 className="text-center text-base font-bold text-metacore-primary sm:text-lg md:text-xl lg:text-2xl">
              {content.home.title}
            </h3>
            {content.home.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-center text-xs font-bold text-white sm:text-sm md:text-base lg:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="flex w-full flex-col justify-start gap-2 bg-metacore-secondary px-4 py-8 xxs:hidden">
          <div className="flex flex-1 flex-col items-center justify-center gap-2 lg:gap-4">
            <h3 className="text-center text-base font-bold text-metacore-primary">
              {content.home.title}
            </h3>
            {content.home.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-center text-xs font-bold text-white"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <ImageCarousel />
        <WhyMetacore />
        <div className="mx-auto flex flex-col gap-8 bg-metacore-secondary/5 px-8 py-8 sm:px-16 sm:pt-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-semibold">
                {content.subjects.title}
              </h2>
              <p>{content.subjects.content}</p>
              <ul className="mt-4 list-disc pl-5">
                {content.subjects.list.map((subject) => (
                  <li key={subject}>{subject}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-semibold">
                {content.tutors.title}
              </h2>
              <p>{content.tutors.content}</p>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="mb-4 text-2xl font-semibold">
              {content.personalizedLearning.title}
            </h2>
            <p>{content.personalizedLearning.content}</p>
          </div>
          <div className="mt-8">
            <h2 className="mb-4 text-2xl font-semibold">
              {content.mentoring.title}
            </h2>
            <p>{content.mentoring.content}</p>
          </div>
          <div className="mt-8">
            <h2 className="mb-4 text-2xl font-semibold">
              {content.counselling.title}
            </h2>
            <p>{content.counselling.content}</p>
          </div>
          {/* <div className="mt-8 text-center">
        <Link href="/get-started">
        <Button className="px-6 py-3 text-lg">Get Started</Button>
        </Link>
        </div> */}
        </div>
      </div>
    </div>
  );
};
