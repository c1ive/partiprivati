"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { loadYamlData, type ReleasesData } from "@/lib/yaml-loader";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ReleasesPage() {
  const [releasesData, setReleasesData] = useState<ReleasesData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadYamlData<ReleasesData>("releases.yml")
      .then(setReleasesData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("de-DE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="typewriter text-large">Loading discography...</div>
      </div>
    );
  }

  if (!releasesData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600 text-large">Failed to load releases</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <Navigation />

      {/* Header - Dramatic and Split */}
      <header className="space-huge">
        <div className="position-left">
          <h1 className="text-massive font-bold ink-splatter">Releases</h1>
        </div>
        <div className="position-right space-large">
          <p className="text-large text-[var(--muted)] handwritten">
            Our questionable discography
          </p>
        </div>
      </header>

      <main>
        {/* Releases - Varied layouts */}
        <div className="space-huge">
          {releasesData.releases.map((release, index) => (
            <div key={index} className="space-huge">
              {/* Alternate between left and right layouts */}
              <div
                className={`${
                  index % 2 === 0 ? "text-block-left" : "text-block-right"
                }`}
              >
                <div className="release-card">
                  {/* Album Art Placeholder */}
                  <div
                    className={`${
                      index % 2 === 0 ? "float-left" : "float-right"
                    } w-60 h-60 paper-bg rough-border flex items-center justify-center mb-6`}
                  >
                    <span className="text-[var(--muted)] typewriter text-center text-small">
                      [{release.title}
                      <br />
                      Cover Art]
                    </span>
                  </div>

                  {/* Release Info */}
                  <div className="space-medium">
                    <div className="mb-6">
                      <h2 className="text-huge font-bold text-[var(--accent)] mb-2">
                        {release.title}
                      </h2>
                      <span className="px-4 py-2 bg-[var(--muted)] text-white text-medium typewriter rounded inline-block">
                        {release.type}
                      </span>
                      <p className="text-medium text-[var(--muted)] typewriter mt-4 mb-6">
                        Released {formatDate(release.releaseDate)} •{" "}
                        {release.tracks} track{release.tracks !== 1 ? "s" : ""}
                      </p>
                      <div className="text-large leading-relaxed handwritten mb-6">
                        {release.description
                          .split("\n")
                          .map((line, lineIndex) => (
                            <p key={lineIndex} className="mb-4">
                              {line}
                            </p>
                          ))}
                      </div>
                    </div>

                    {/* Links */}
                    {(release.links.bandcamp || release.links.spotify) && (
                      <div className="mb-8 space-small">
                        {release.links.bandcamp && (
                          <a
                            href={release.links.bandcamp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="indie-btn text-medium mr-4"
                          >
                            Bandcamp
                          </a>
                        )}
                        {release.links.spotify && (
                          <a
                            href={release.links.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="indie-btn text-medium"
                          >
                            Spotify
                          </a>
                        )}
                      </div>
                    )}

                    {/* Tracklist */}
                    <div className="clear-both">
                      <h3 className="text-large font-bold mb-4 text-[var(--accent-yellow)]">
                        Tracklist
                      </h3>
                      <ol className="space-small">
                        {release.tracklist.map((track, trackIndex) => (
                          <li
                            key={trackIndex}
                            className="typewriter flex text-medium mb-2"
                          >
                            <span className="text-[var(--muted)] mr-4 min-w-[3rem]">
                              {trackIndex + 1}.
                            </span>
                            <span>{track}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Releases Message */}
        {releasesData.releases.length === 0 && (
          <div className="text-block-center space-huge">
            <div className="paper-bg p-12">
              <h2 className="text-huge mb-8">No Releases Yet</h2>
              <p className="text-medium text-[var(--muted)] mb-8 handwritten">
                We're still figuring out how to record things properly.
                <br />
                Check back soon for some extremely lo-fi indie goodness!
              </p>
              <Link href="/" className="indie-btn text-large">
                Back to Home
              </Link>
            </div>
          </div>
        )}
      </main>

      <Footer message="All recordings made with love, duct tape, and too much reverb" />
    </div>
  );
}
