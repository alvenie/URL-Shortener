'use client';

import Content from '../components/Content';

export default function HomePage() {

  return (
      <div className="flex flex-col items-center p-20">
          <h1 className="text-4xl font-semibold">
              URL Shortener
          </h1>
          <p className="text-sm font-semibold text-gray-400 p-1">
              Shorten your long URLs into compact, shareable links
          </p>
          <Content />
      </div>
  );
}
