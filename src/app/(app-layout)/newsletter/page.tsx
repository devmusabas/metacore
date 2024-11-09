import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import content from '@/utils/content.json';

export default function NewsletterPage(): JSX.Element {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-4xl font-bold">{content.newsletter.title}</h1>
        <p className="mb-8 text-lg">{content.newsletter.content}</p>
        <form className="mx-auto max-w-md">
          <Input
            type="email"
            placeholder="Enter your email address"
            className="mb-4"
          />
          <Button type="submit" className="w-full">
            Subscribe
          </Button>
        </form>
      </div>
    </Layout>
  );
}
