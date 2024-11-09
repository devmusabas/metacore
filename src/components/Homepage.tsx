import Link from 'next/link';

import Layout from '@/components/Layout';
import content from '@/utils/content.json';

import { Button } from './ui/button';

export const Homepage: FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-4xl font-bold">{content.home.title}</h1>
        <p className="mb-8 text-lg">{content.home.content}</p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              {content.courses.title}
            </h2>
            <p>{content.courses.content}</p>
            <ul className="mt-4 list-disc pl-5">
              {content.courses.subjects.map((subject) => (
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
        <div className="mt-8 text-center">
          <Link href="/get-started">
            <Button className="px-6 py-3 text-lg">Get Started</Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};
