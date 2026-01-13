import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Namqula | African-First AI Language Model',
  description: 'Learn about Namqula, the African-First AI Language Model, and our mission to preserve and advance African languages through community engagement and technology.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}