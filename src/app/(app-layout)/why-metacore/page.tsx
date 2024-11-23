import React from 'react';

import content from '@/utils/content.json';

export default function WhyMetacorePage(): JSX.Element {
  return (
    <div className="mx-auto mt-16 w-full p-8">
      <h1 className="mb-6 text-4xl font-bold text-[#453599ff]">
        {content.whyMetacore.title}
      </h1>
      <p className="mb-8 text-lg">{content.whyMetacore.content}</p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {content.whyMetacore.reasons.map((reason, index) => (
          <div key={index} className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">{reason.title}</h2>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
