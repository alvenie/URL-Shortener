import './globals.css';
import React from 'react';
import Header from '../components/Header';

export const metadata = {
    title: 'URL Shortener',
    description: 'Shorten your URLs easily!',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div>
                    <Header />
                    <div className="bg-blue-200 min-h-screen">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
