import './globals.css';
import React from 'react';

export const metadata = {
  title: 'CmBuddy - AI Automation Engine',
  description: 'Real-Time Motion Gesture Engine & WhatsApp Support Workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}