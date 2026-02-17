"use client";

import "@material/web/button/filled-tonal-button.js";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "md-filled-tonal-button": React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLElement> & { slot?: string },
        HTMLElement
      >;
    }
  }
}

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <button
        className="absolute top-4 left-4 rounded-full bg-gray-200 p-2 text-sm text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Back
      </button>
      <main className="flex w-full max-w-3xl flex-col items-center justify-center gap-6 px-8 text-center">
        <h1 className="text-5xl font-extrabold sm:text-6xl mx-auto mb-2.5">
          Gallery
        </h1>
        <div className="flex w-full flex-wrap justify-center gap-6 px-4">
          <img
            src="/backup.png"
            className="h-72 sm:h-80 md:h-96 w-auto max-w-[32%] rounded-2xl object-contain flex-shrink-0"
            alt="Backup image"
          />
          <img
            src="/main.png"
            className="h-72 sm:h-80 md:h-96 w-auto max-w-[32%] rounded-2xl object-contain flex-shrink-0"
            alt="Main image"
          />
          <img
            src="/new_can.png"
            className="h-72 sm:h-80 md:h-96 w-auto max-w-[32%] rounded-2xl object-contain flex-shrink-0"
            alt="New can image"
          />
        </div>
        <div className="flex w-full flex-wrap justify-center gap-6 px-4">
          <img
            src="/can_details.png"
            className="h-56 sm:h-64 md:h-72 w-auto max-w-[24%] rounded-2xl object-contain flex-shrink-0"
            alt="Can details"
          />
          <img
            src="/settings.png"
            className="h-56 sm:h-64 md:h-72 w-auto max-w-[24%] rounded-2xl object-contain flex-shrink-0"
            alt="Settings"
          />
          <img
            src="/gallery.png"
            className="h-56 sm:h-64 md:h-72 w-auto max-w-[24%] rounded-2xl object-contain flex-shrink-0"
            alt="Gallery icon"
          />
        </div>
      </main>
    </div>
  );
}
