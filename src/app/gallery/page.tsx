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
      <main className="flex w-full max-w-3xl flex-col items-center justify-center gap-6 px-8 text-center">
        <h1 className="text-5xl font-extrabold sm:text-6xl mx-auto">Gallery</h1>
        <div className="flex w-full justify-center gap-4 px-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSopNrL-CN2qZkvCx34haiWrkYUQxBCT2UkQA&s"></img>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSopNrL-CN2qZkvCx34haiWrkYUQxBCT2UkQA&s"></img>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSopNrL-CN2qZkvCx34haiWrkYUQxBCT2UkQA&s"></img>
        </div>
      </main>
    </div>
  );
}
