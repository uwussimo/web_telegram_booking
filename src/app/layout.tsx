import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Doctor Booker',
  description: 'On Demand boooking for doctors',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        <Script src="https://telegram.org/js/telegram-web-app.js" />
      </head>

      <body>{children}</body>
    </html>
  );
}
