import React from 'react';

import Layout from '@/components/Layout';
import content from '@/utils/content.json';

export default function MentoringPage(): JSX.Element {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-4xl font-bold">{content.mentoring.title}</h1>
        <p className="mb-8 text-lg">{content.mentoring.content}</p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {content.mentoring.services.map((service, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-2xl font-semibold">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
