import React from 'react';

import content from '@/utils/content.json';

export default function MentoringPage(): JSX.Element {
  return (
    <div className="mx-auto mt-16 w-full p-8">
      <h1 className="mb-6 text-4xl font-bold text-[#453599ff]">
        {content.mentoring.title}
      </h1>
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
  );
}
