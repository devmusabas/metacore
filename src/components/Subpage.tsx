import React from 'react';

interface SubpageProps {
  pageContent: {
    title: string;
    content: string;
    list: {
      id: string;
      title: string;
      href: string;
      content: string;
    }[];
  };
}

const Subpage: React.FC<SubpageProps> = ({ pageContent }) => {
  const { title, content, list } = pageContent;
  return (
    <div className="mx-auto mt-24 w-full px-8 pb-8">
      <h1 className="mb-6 text-4xl font-bold text-[#453599ff]">{title}</h1>
      <h3 className="mb-8 text-xl font-semibold">{content}</h3>
      <div className="flex snap-y flex-col gap-8">
        {list.map((section) => (
          <div
            id={section.id}
            key={section.id}
            className="snap-start scroll-mt-20"
          >
            <h2 className="mb-4 text-2xl font-semibold text-metacore-primary">
              {section.title}
            </h2>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subpage;
