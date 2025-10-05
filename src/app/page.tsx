"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { loadYamlData, type BandInfo } from "@/lib/yaml-loader";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  const [bandInfo, setBandInfo] = useState<BandInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadYamlData<BandInfo>("about.yml")
      .then(setBandInfo)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="typewriter text-large">Loading...</div>
      </div>
    );
  }

  if (!bandInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600 text-large">
          Failed to load band information
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <Navigation />

      {/* Main Content */}
      <main>
        <div className="flex flex-col items-center my-16">
          <div className="relative w-full max-w-[800px]">
            <div className=" ml-[-8px]">
              <Image
                src="/Wortmarke-6.svg"
                alt="Logo"
                width={800}
                height={400}
                className="transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Description - Centered */}
        <div className="text-block space-huge">
          <div className="text-block-center">
            <p className="text-large leading-relaxed">
              {bandInfo.description.split("\n\n")[0]}
            </p>
          </div>
          <div className="text-block-center space-large">
            <p className="text-medium leading-relaxed">
              {bandInfo.description.split("\n\n")[1] ||
                bandInfo.description.split("\n")[2]}
            </p>
          </div>
          <div className="text-block-center space-large">
            <p className="text-large leading-relaxed">
              {bandInfo.description.split("\n\n")[2] ||
                bandInfo.description.split("\n").slice(-2).join(" ")}
            </p>
          </div>
        </div>

        {/* Info centered */}
        <div className="space-huge">
          <div className="position-center space-large">
            <div className="text-huge text-[var(--accent-yellow)]">
              {bandInfo.formation}
            </div>
            <div className="text-small typewriter">Formed</div>
          </div>

          <div className="position-center space-large">
            <div className="text-large">{bandInfo.location}</div>
          </div>

          <div className="position-center space-large">
            <div className="text-medium text-[var(--accent)]">
              {bandInfo.genre}
            </div>
          </div>
        </div>

        {/* Contact - Big block center */}
        <div className="space-huge paper-bg p-8">
          <h2 className="text-huge mb-8 position-center">Get in Touch</h2>
          <div className="space-medium">
            <div className="position-center">
              <span className="text-large typewriter text-[var(--accent-yellow)]">
                Email:
              </span>
              <br />
              <a
                href={`mailto:${bandInfo.contact.email}`}
                className="text-medium text-[var(--accent)] hover:underline"
              >
                {bandInfo.contact.email}
              </a>
            </div>
            <div className="position-center space-medium">
              <span className="text-large typewriter text-[var(--accent-yellow)]">
                Instagram:
              </span>
              <br />
              <a
                href={`https://instagram.com/${bandInfo.contact.instagram.replace(
                  "@",
                  ""
                )}`}
                className="text-medium text-[var(--accent)] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {bandInfo.contact.instagram}
              </a>
            </div>
            <div className="position-center space-large">
              <span className="text-large typewriter text-[var(--accent-yellow)]">
                Bandcamp:
              </span>
              <br />
              <a
                href={`https://${bandInfo.contact.bandcamp}`}
                className="text-medium text-[var(--accent)] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {bandInfo.contact.bandcamp}
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action - Centered */}
        <div className="space-huge">
          <div className="position-center">
            <Link
              href="/events"
              className="indie-btn text-large bg-[var(--accent-yellow)] text-black border-black hover:bg-[var(--accent)] hover:text-white"
            >
              Check Live Dates
            </Link>
          </div>
          <div className="position-center space-medium">
            <Link
              href="/releases"
              className="indie-btn text-large bg-[var(--accent-yellow)] text-black border-black hover:bg-[var(--accent)] hover:text-white"
            >
              Listen to Our Music
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
