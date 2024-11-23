import React from 'react';
import {
  Book,
  BookA,
  Calculator,
  FlaskConical,
  Globe,
  LetterText,
  Magnet,
  Microscope,
  PenTool,
} from 'lucide-react';

import content from '@/utils/content.json';

const iconMap: { [key: string]: JSX.Element } = {
  'English Language': <LetterText className="text-[#f03f2bff]" size={50} />,
  'English Literature': <BookA className="text-[#f03f2bff]" size={50} />,
  Mathematics: <Calculator className="text-[#f03f2bff]" size={50} />,
  Chemistry: <FlaskConical className="text-[#f03f2bff]" size={50} />,
  Geography: <Globe className="text-[#f03f2bff]" size={50} />,
  Biology: <Microscope className="text-[#f03f2bff]" size={50} />,
  Physics: <Magnet className="text-[#f03f2bff]" size={50} />,
  Art: <PenTool className="text-[#f03f2bff]" size={50} />,
};

export default function CoursesPage(): JSX.Element {
  return (
    <div className="mx-auto mt-16 w-full p-8">
      <h1 className="mb-6 text-4xl font-bold text-[#453599ff]">
        {content.courses.title}
      </h1>
      <p className="mb-8 text-lg">{content.courses.content}</p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {content.courses.subjects.map((subject: string, index) => (
          <div key={index} className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center">
              {iconMap[subject] || (
                <Book className="text-[#f03f2bff]" size={50} />
              )}
              <h2 className="ml-4 text-2xl font-semibold text-[#f03f2bff]">
                {subject}
              </h2>
            </div>
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
  );
}
