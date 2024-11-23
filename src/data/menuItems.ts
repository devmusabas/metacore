import type { MenuItem } from '@/types/menu';

export const menuItems: Record<string, MenuItem> = {
  coursesAndLearning: {
    title: 'Courses and Learning',
    submenu: {
      courses: {
        title: 'Our Courses',
        href: '/courses',
        submenu: {
          gsce: { title: 'GCSE Preparation', href: '/courses#gcse' },
          aLevel: { title: 'A Level Preparation', href: '/courses#a-level' },
          subjectSpecific: {
            title: 'Subject-Specific Tuition',
            href: '/courses#subject-specific',
          },
          english: {
            title: 'English Language & Literature',
            href: '/courses#english',
          },
          maths: { title: 'Mathematics', href: '/courses#mathematics' },
          sciences: { title: 'Sciences', href: '/courses#sciences' },
          optional: { title: 'Optional Subjects', href: '/courses#optional' },
        },
      },
      personalisedLearning: {
        title: 'Personalised Learning',
        href: '/personalised-learning',
        submenu: {
          initialAssessment: {
            title: 'Initial Assessment',
            href: '/personalised-learning#assessment',
          },
          curriculum: {
            title: 'Tailored Curriculum',
            href: '/personalised-learning#curriculum',
          },
          tracking: {
            title: 'Student Progress Tracking',
            href: '/personalised-learning#progress',
          },
        },
      },
    },
  },
  // {
  //   title: 'Our Tutors',
  //   href: '/tutors',
  //   submenu: [
  //     { title: 'Experienced Professionals', href: '/tutors/professionals' },
  //     { title: 'One-on-One Tuition', href: '/tutors/one-on-one' },
  //     { title: 'Subject Expertise', href: '/tutors/expertise' },
  //   ],
  // },
  studentServices: {
    title: 'Student Services',
    submenu: {
      mentoring: {
        title: 'Mentoring Services',
        href: '/mentoring',
        submenu: {
          personalMentors: {
            title: 'Personal Academic Mentors',
            href: '/mentoring#mentors',
          },
          monitoring: {
            title: 'Progress Monitoring',
            href: '/mentoring#monitoring',
          },
          support: {
            title: 'Motivational Support',
            href: '/mentoring#support',
          },
        },
      },
      counselling: {
        title: 'Counselling & Support',
        href: '/counselling',
        submenu: {
          wellBeing: {
            title: 'Emotional Well-being',
            href: '/counselling#wellbeing',
          },
          stressMang: {
            title: 'Stress Management',
            href: '/counselling#stress',
          },
          counselling: {
            title: 'Counselling Services',
            href: '/counselling#services',
          },
        },
      },
    },
  },
  // {
  //   title: 'Why MetaCORE?',
  //   href: '/why-metacore',
  //   submenu: [
  //     { title: 'Tailored Programmes', href: '/why-metacore/programmes' },
  //     { title: 'Expert Tutors', href: '/why-metacore/tutors' },
  //     { title: 'Holistic Approach', href: '/why-metacore/holistic' },
  //     { title: 'Convenient Online Learning', href: '/why-metacore/online' },
  //   ],
  // },
  getStarted: {
    title: 'Get Started',
    href: '/get-started',
    submenu: {
      bookAssessment: {
        title: 'Book an Assessment',
        href: '/get-started#assessment',
      },
      viewStudyPlans: {
        title: 'View Our Study Plans',
        href: '/get-started#plans',
      },
      joinLesson: { title: 'Join a Lesson', href: '/get-started#lesson' },
    },
  },
  // { title: 'Newsletter', href: '/newsletter' },
  contact: { title: 'Contact Us', href: '/contact' },
};
