import React from 'react';

import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import content from '@/utils/content.json';

export default function ContactPage(): JSX.Element {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-4xl font-bold">{content.contact.title}</h1>
        <p className="mb-8 text-lg">{content.contact.content}</p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Contact Information</h2>
            <p>Email: {content.contact.email}</p>
            <p>Phone: {content.contact.phone}</p>
            <p>Address: {content.contact.address}</p>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Send us a message</h2>
            <form>
              <Input type="text" placeholder="Your Name" className="mb-4" />
              <Input type="email" placeholder="Your Email" className="mb-4" />
              <Textarea placeholder="Your Message" className="mb-4" />
              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
