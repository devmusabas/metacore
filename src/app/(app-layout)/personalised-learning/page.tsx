import React from 'react';

import Subpage from '@/components/Subpage';
import content from '@/utils/content.json';

export default function PersonalisedLearningPage(): JSX.Element {
  return <Subpage pageContent={content.personalizedLearning} />;
}
