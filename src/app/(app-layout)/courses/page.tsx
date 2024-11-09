import React from 'react';

import Layout from '@/components/Layout';
import content from '@/utils/content.json';

export default function CoursesPage(): JSX.Element {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-4xl font-bold">{content.courses.title}</h1>
        <p className="mb-8 text-lg">{content.courses.content}</p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {content.courses.subjects.map((subject: string, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-2xl font-semibold">{subject}</h2>
              <p>
                {
                  content.courses.subjectDescriptions[
                    subject as keyof typeof content.courses.subjectDescriptions
                  ]
                }
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
