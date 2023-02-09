'use client';

import { TRPCProvider } from '../src/utils';

import '../styles/globals.scss';

interface RootLayoutProps {
  children: React.ReactNode;
}
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
      <html>
      <head>
        <title>The Rick and Morty</title>
      </head>
      <head>{<title>The Rick and Morty</title> }</head>
      <body>
      <TRPCProvider>
        <h1>asdasd</h1>
        <div>{children}</div>
      </TRPCProvider>
      </body>
      </html>
  );
};
export default RootLayout;