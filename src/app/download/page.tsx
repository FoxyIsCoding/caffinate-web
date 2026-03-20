"use client";

import "@material/web/button/filled-tonal-button.js";
import { useEffect, useState } from "react";

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

interface GitHubAsset {
  name: string;
  browser_download_url: string;
  size: number;
}

interface GitHubRelease {
  tag_name: string;
  name: string;
  html_url: string;
  published_at: string;
  assets: GitHubAsset[];
}

export default function Download() {
  const [release, setRelease] = useState<GitHubRelease | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLatestRelease() {
      try {
        const res = await fetch(
          "https://api.github.com/repos/FoxyIsCoding/Caffinate/releases/latest",
          {
            headers: {
              Accept: "application/vnd.github+json",
            },
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch release");
        }

        const data = (await res.json()) as GitHubRelease;
        setRelease(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchLatestRelease();
  }, []);

  const apkAsset = release?.assets.find((asset) =>
    asset.name.endsWith(".apk")
  );

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

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
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-extrabold sm:text-6xl mx-auto">
            Download
          </h1>
        </div>

        {loading && (
          <p className="mt-6 text-lg text-center text-on-surface-variant">
            Loading latest release...
          </p>
        )}

        {error && (
          <div className="mt-6 rounded-2xl bg-surface-container-high px-6 py-4">
            <p className="text-lg text-on-surface-variant">
              Failed to load release: {error}
            </p>
          </div>
        )}

        {release && !loading && (
          <>
            <div className="mt-6 flex flex-col gap-2">
              <p className="text-lg">
                Latest version: <span className="font-bold">{release.tag_name}</span>
              </p>
              {release.name && (
                <p className="text-sm text-on-surface-variant">{release.name}</p>
              )}
            </div>

            {apkAsset ? (
              <div className="flex flex-col items-center gap-4 w-full">
                <md-filled-tonal-button
                  style={{
                    paddingInline: "1.5rem",
                    paddingBlock: "0.75rem",
                    borderRadius: "9999px",
                    fontSize: "1rem",
                  }}
                  onClick={() => {
                    window.location.href = apkAsset.browser_download_url;
                  }}
                >
                  Download APK ({formatFileSize(apkAsset.size)})
                </md-filled-tonal-button>

                <a
                  href={release.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-on-surface-variant hover:text-on-surface transition-colors underline"
                >
                  View release on GitHub
                </a>
              </div>
            ) : (
              <div className="mt-6 rounded-2xl bg-surface-container-high px-6 py-4">
                <p className="text-lg text-on-surface-variant">
                  No APK file found in the latest release.
                </p>
                <a
                  href={release.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-sm text-on-surface-variant hover:text-on-surface transition-colors underline"
                >
                  View release on GitHub
                </a>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
