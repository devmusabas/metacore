'use client';

import type { LucideIcon } from 'lucide-react';
import { GraduationCap, Laptop, Leaf, Puzzle } from 'lucide-react';

import content from '@/utils/content.json';
import { cn } from '@/lib/utils';

interface MetacoreValue {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
}

const values: MetacoreValue[] = content.whyMetacore.reasons.map((reason) => {
  let icon: LucideIcon;

  switch (reason.title) {
    case 'Tailored Programmes':
      icon = Puzzle;
      break;
    case 'Expert Tutors':
      icon = GraduationCap;
      break;
    case 'Holistic Approach':
      icon = Leaf;
      break;
    case 'Convenient Online Learning':
      icon = Laptop;
      break;
    default:
      icon = Puzzle;
  }

  return {
    id: reason.title.toLowerCase().replace(/\s+/g, '-'),
    title: reason.title,
    icon: icon,
    description: reason.description,
  };
});

const ValueCard = ({ value }: { value: MetacoreValue }): JSX.Element => {
  const Icon = value.icon;

  return (
    <div
      className={cn(
        'flex flex-col items-center p-5 text-center',
        'rounded-xl bg-metacore-secondary/5',
        'border border-metacore-primary/5 shadow-md',
        'w-[220px] space-y-3'
      )}
    >
      <div className="rounded-full bg-metacore-primary/5 p-3">
        <Icon className="h-10 w-10 text-metacore-primary" strokeWidth={1.5} />
      </div>

      <div className="space-y-2">
        <h3 className="text-base font-bold text-metacore-primary">
          {value.title}
        </h3>
        <p className="text-xs leading-relaxed text-gray-500">
          {value.description}
        </p>
      </div>
    </div>
  );
};

const WhyMetacore = (): JSX.Element => {
  return (
    <div className="bg-metacore-primary/2 mx-auto w-full max-w-[1663px] space-y-6 p-6 pt-12">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold text-metacore-primary">
          {content.whyMetacore.title}
        </h2>
        <h3 className="mx-auto max-w-2xl text-lg text-gray-600">
          {content.whyMetacore.content}
        </h3>
      </div>

      <div className="flex flex-wrap justify-center gap-6 p-8">
        {values.map((value) => (
          <ValueCard key={value.id} value={value} />
        ))}
      </div>
    </div>
  );
};

export default WhyMetacore;
