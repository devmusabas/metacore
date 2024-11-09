import React from 'react';
import Image from 'next/image';

import Layout from '@/components/Layout';
import content from '@/utils/content.json';

export default function TutorsPage(): JSX.Element {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-4xl font-bold">{content.tutors.title}</h1>
        <p className="mb-8 text-lg">{content.tutors.content}</p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {content.tutors.profiles.map(
            (profile: {
              image: string;
              name: string;
              specialization: string;
            }) => (
              <>
                <Image
                  src={profile.image}
                  alt={profile.name}
                  width={500}
                  height={500}
                  className="mb-4 h-48 w-full rounded-md object-cover"
                />
                <h2 className="mb-2 text-2xl font-semibold">{profile.name}</h2>
                <p className="mb-4 text-gray-600">{profile.specialization}</p>
              </>
            )
          )}
        </div>
      </div>
    </Layout>
  );
}
