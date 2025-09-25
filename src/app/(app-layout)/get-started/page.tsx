import React from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import content from '@/utils/content.json';

export default function GetStartedPage(): JSX.Element {
  return (
    <div className="mx-auto mt-16 w-full p-8">
      <h1 className="mb-6 text-4xl font-bold text-[#453599ff]">
        {content.getStarted.title}
      </h1>
      <p className="mb-8 text-lg">{content.getStarted.content}</p>
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
        {content.getStarted.steps.map((step) => (
          <div
            key={step.title}
            className="flex min-h-60 max-w-80 flex-col justify-between rounded-lg bg-white p-6 shadow-md"
          >
            <>
              <h2 className="mb-4 text-2xl font-semibold">{step.title}</h2>
              <p className="mb-4">{step.description}</p>
            </>
            <Button>
              <Link
                href={step?.href || '#'}
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                {step.buttonText}
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
