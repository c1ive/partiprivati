'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { loadYamlData, type BandInfo } from '@/lib/yaml-loader';

export default function Home() {
  const [bandInfo, setBandInfo] = useState<BandInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadYamlData<BandInfo>('about.yml')
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
        <div className="text-red-600 text-large">Failed to load band information</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      {/* Navigation - Scattered */}
      <nav className="mb-12">
        <div className="position-left space-medium">
          <Link href="/" className="nav-link text-medium">
            Home
          </Link>
        </div>
        <div className="position-center space-small">
          <Link href="/events" className="nav-link text-large">
            Live
          </Link>
        </div>
        <div className="position-right space-medium">
          <Link href="/releases" className="nav-link text-medium">
            Releases
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Band Name - Massive and Center */}
        <div className="text-block space-huge position-center">
          <h1 className="text-gigantic font-bold rotate-1 ink-splatter">
            {bandInfo.bandName}
          </h1>
        </div>

        {/* Tagline - Scattered Right */}
        <div className="text-block space-large position-scattered-right">
          <p className="text-large text-[var(--accent)] handwritten rotate-2">
            {bandInfo.tagline}
          </p>
        </div>

        {/* Band Photo Placeholder - Left */}
        <div className="text-block-left space-large">
          <div className="w-full h-80 paper-bg rough-border rotate-1 flex items-center justify-center">
            <span className="text-[var(--muted)] typewriter text-medium">
              [Band Photo]
            </span>
          </div>
        </div>

        {/* Description - Scattered positioning */}
        <div className="text-block space-huge">
          <div className="text-block-right">
            <p className="text-large leading-relaxed handwritten">
              {bandInfo.description.split('\n\n')[0]}
            </p>
          </div>
          <div className="text-block-left space-large">
            <p className="text-medium leading-relaxed handwritten">
              {bandInfo.description.split('\n\n')[1] || bandInfo.description.split('\n')[2]}
            </p>
          </div>
          <div className="text-block-center space-large">
            <p className="text-large leading-relaxed handwritten">
              {bandInfo.description.split('\n\n')[2] || bandInfo.description.split('\n').slice(-2).join(' ')}
            </p>
          </div>
        </div>

        {/* Info scattered across page */}
        <div className="space-huge">
          <div className="position-left space-large">
            <div className="text-huge text-[var(--accent)] handwritten rotate-1">
              {bandInfo.formation}
            </div>
            <div className="text-small typewriter">Formed</div>
          </div>
          
          <div className="position-center space-large">
            <div className="text-large handwritten rotate-2">
              {bandInfo.location}
            </div>
          </div>
          
          <div className="position-right space-large">
            <div className="text-medium text-[var(--accent)] handwritten rotate-1">
              {bandInfo.genre}
            </div>
          </div>
        </div>

        {/* Contact - Big block center */}
        <div className="text-block-wide space-huge paper-bg p-8 rotate-1">
          <h2 className="text-huge mb-8 position-center">Get in Touch</h2>
          <div className="space-medium">
            <div className="position-left">
              <span className="text-large typewriter">Email:</span>
              <br />
              <a href={`mailto:${bandInfo.contact.email}`} className="text-medium text-[var(--accent)] hover:underline">
                {bandInfo.contact.email}
              </a>
            </div>
            <div className="position-right space-medium">
              <span className="text-large typewriter">Instagram:</span>
              <br />
              <a href={`https://instagram.com/${bandInfo.contact.instagram.replace('@', '')}`} 
                 className="text-medium text-[var(--accent)] hover:underline"
                 target="_blank" rel="noopener noreferrer">
                {bandInfo.contact.instagram}
              </a>
            </div>
            <div className="position-center space-large">
              <span className="text-large typewriter">Bandcamp:</span>
              <br />
              <a href={`https://${bandInfo.contact.bandcamp}`} 
                 className="text-medium text-[var(--accent)] hover:underline"
                 target="_blank" rel="noopener noreferrer">
                {bandInfo.contact.bandcamp}
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action - Scattered */}
        <div className="space-huge">
          <div className="position-left">
            <Link href="/events" className="indie-btn text-large">
              Check Live Dates
            </Link>
          </div>
          <div className="position-right space-medium">
            <Link href="/releases" className="indie-btn text-large">
              Listen to Our Music
            </Link>
          </div>
        </div>
      </main>

      {/* Footer - Small and right */}
      <footer className="mt-16 position-right">
        <p className="text-[var(--muted)] typewriter text-tiny">
          Made with ♡ and questionable decisions in Freiburg
        </p>
      </footer>
    </div>
  );
}