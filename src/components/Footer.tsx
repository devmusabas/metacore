'use client';

import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

import content from '@/utils/content.json';

import Whatsapp from './icons/Whatsapp';
import X from './icons/XIcon';

const socialIcons = {
  facebook: Facebook,
  twitter: X,
  instagram: Instagram,
  linkedin: Linkedin,
};

export default function Footer(): JSX.Element {
  return (
    <footer className="mx-auto flex w-full max-w-[1663px] flex-col gap-8 bg-gray-800 px-8 py-8 pt-12 text-white sm:px-16 sm:py-16 sm:pt-16">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" passHref>
                  Our Courses
                </Link>
              </li>
              {/* <li>
                <Link href="/tutors" passHref>
                  Our Tutors
                </Link>
              </li> */}
              <li>
                <Link href="/get-started" passHref>
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="mb-4 text-xl font-bold">Contact Us</h3>

            <Link
              className="flex items-center gap-2"
              href="mailto:contact@metacoreducation.co.uk"
              passHref
            >
              Email us
              <Mail size={22} />
            </Link>

            <Link
              className="flex items-center gap-2"
              href={`https://wa.me/${content.contact.phone.replace(/\D/g, '')}`}
              passHref
            >
              Chat on WhatsApp
              <Whatsapp size={22} />
            </Link>
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
                    <Link
                      href={url}
                      key={platform}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl transition-transform hover:scale-[1.1] hover:drop-shadow-[0_0_1px_rgb(250,250,250)] active:scale-[1] active:transition-none"
                    >
                      <Icon className="h-6 w-6" />
                    </Link>
                  );
                }
              )}
            </div>
          </div>
        </div>
        {/* <div className="mt-8 text-center">
          <p>&copy; 2023 MetaCORE Education. All rights reserved.</p>
        </div> */}
      </div>
    </footer>
  );
}
