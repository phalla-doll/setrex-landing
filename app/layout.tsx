import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Setrex - Turn your big idea into a stunning website',
  description: 'Fintech is its potential to promote financial inclusion.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-black text-white font-satoshi antialiased selection:bg-[#D4FF3E] selection:text-black" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
