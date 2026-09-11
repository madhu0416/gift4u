import type { Metadata } from 'next';
import './globals.css';
import { QueryProvider } from '../providers/QueryProvider';

export const metadata: Metadata = { title: 'Gift4U | Make Every Moment Special', description: 'Flowers, cakes, personalised gifts and more.' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><QueryProvider>{children}</QueryProvider></body></html>;
}
