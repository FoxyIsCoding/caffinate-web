"use client";

import "@material/web/button/filled-tonal-button.js";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "md-filled-tonal-button": React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLElement> & { slot?: string }, HTMLElement>;
    }
  }
}

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <main className="flex w-full max-w-3xl flex-col items-center justify-center gap-6 px-8 text-center">
        <h1 className="text-5xl font-extrabold sm:text-6xl mx-auto">Caffinate</h1>
        <p className="mt-6 text-lg text-center">
          an open-source tracker for your energy drink consumption
        </p>

        <div className="flex w-full justify-center gap-4 px-4">
          <md-filled-tonal-button style={{ paddingInline: "1rem", paddingBlock: "0.5rem", borderRadius: "9999px" }}>
            Gallery
          </md-filled-tonal-button>
          <md-filled-tonal-button style={{ paddingInline: "1rem", paddingBlock: "0.5rem", borderRadius: "9999px" }}>
            Download
          </md-filled-tonal-button>
        </div>
      </main>
    </div>
  );
}
