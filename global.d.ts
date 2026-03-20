/// <reference types="react" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'md-filled-tonal-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { 
          slot?: string;
        },
        HTMLElement
      >;
    }
  }
}

export {};
