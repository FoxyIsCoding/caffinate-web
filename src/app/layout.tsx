import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caffinate",
  description: "an open-source tracker for your energy drink consumption",
  icons: {
    icon: "/file.svg",
  },
};

async function getLatestCommitHash() {
  try {
    const res = await fetch(
      "https://api.github.com/repos/FoxyIsCoding/Caffinate/commits?per_page=1",
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
        next: { revalidate: 300 },
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch commits");
    }

    const data = (await res.json()) as { sha?: string }[];
    const sha = data[0]?.sha;

    return (
      sha ||
      process.env.NEXT_PUBLIC_COMMIT_HASH ||
      process.env.VERCEL_GIT_COMMIT_SHA ||
      "dev"
    );
  } catch {
    return (
      process.env.NEXT_PUBLIC_COMMIT_HASH ||
      process.env.VERCEL_GIT_COMMIT_SHA ||
      "dev"
    );
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const commitHash = await getLatestCommitHash();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col bg-surface overflow-hidden`}
      >
        <div className="flex-1 flex">{children}</div>
        <footer className="border-t border-outline-variant bg-surface-container-low px-6 py-4 text-sm text-on-surface-variant">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <span className="font-medium">© Foxy 2026</span>
              <span className="h-1 w-1 rounded-full bg-outline-variant" />
              <span className="font-mono text-xs tracking-wide">
                commit {commitHash.slice(0, 7)}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
                  <a
                    href="https://github.com/FoxyIsCoding/Caffinate"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-secondary-container px-3 py-1 text-secondary-on-container hover:bg-secondary-container-high transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://flavortown.hackclub.com/projects/6663"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-outline px-3 py-1 text-on-surface-variant hover:bg-surface-container-high transition-colors"
              >
                Flavortown × Hack Club
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
