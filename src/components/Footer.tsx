import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

import content from '@/utils/content.json';

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
};

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/courses">Our Courses</Link>
              </li>
              <li>
                <Link href="/tutors">Our Tutors</Link>
              </li>
              <li>
                <Link href="/get-started">Get Started</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
            <p>Email: {content.contact.email}</p>
            <p>Phone: {content.contact.phone}</p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              {Object.entries(content.contact.socialMedia).map(
                ([platform, url]) => {
                  const Icon =
                    socialIcons[
                      platform.toLowerCase() as keyof typeof socialIcons
                    ];
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl"
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  );
                }
              )}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 MetaCORE Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
