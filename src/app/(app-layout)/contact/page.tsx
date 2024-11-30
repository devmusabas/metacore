'use client';

import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Mail } from 'lucide-react';
import Link from 'next/link';

import Whatsapp from '@/components/icons/Whatsapp';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import content from '@/utils/content.json';

export default function ContactPage(): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // Honeypot field for spam prevention
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('All fields are required.');
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    // Check honeypot field
    if (formData.honeypot) {
      toast.error('Spam detected.');
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '', honeypot: '' });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (_error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="mx-auto mt-16 w-full p-8">
      <h1 className="mb-6 text-4xl font-bold text-[#453599ff]">
        {content.contact.title}
      </h1>
      <h3 className="mb-8 text-xl font-semibold">{content.contact.content}</h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <Link
            className="flex items-end gap-4 text-2xl font-bold text-metacore-secondary"
            href="mailto:contact@metacoreducation.co.uk"
            passHref
          >
            <Mail size={32} />
            Email us
          </Link>

          <Link
            className="flex items-end gap-4 text-2xl font-bold text-metacore-secondary"
            href={`https://wa.me/${content.contact.phone.replace(/\D/g, '')}`}
            passHref
          >
            <Whatsapp size={32} />
            Chat on WhatsApp
          </Link>
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Send us a message</h2>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="mb-4"
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="mb-4"
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="mb-4"
            />
            {/* Honeypot field */}
            <Input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />
            <Button
              type="submit"
              disabled={isSending}
              className={`${
                isSending ? 'grayscale' : ''
              } flex items-center justify-center`}
            >
              {isSending ? (
                <svg
                  className="h-5 w-5 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              ) : (
                'Send Message'
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
