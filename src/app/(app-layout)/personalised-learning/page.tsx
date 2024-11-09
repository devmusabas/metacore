import React from 'react';

import Layout from '@/components/Layout';
import content from '@/utils/content.json';

export default function PersonalisedLearningPage(): JSX.Element {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-4xl font-bold">
          {content.personalizedLearning.title}
        </h1>
        <p className="mb-8 text-lg">{content.personalizedLearning.content}</p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {content.personalizedLearning.features.map((feature, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-2xl font-semibold">{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
