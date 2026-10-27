import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CodeRats Enterprise | Em breve',
  description: 'CodeRats Enterprise está chegando. Acompanhe os próximos passos da comunidade.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
