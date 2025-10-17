interface FooterProps {
  className?: string;
}

export default function Footer({ className = "mt-16" }: FooterProps) {
  return (
    <footer
      className={`${className} border-t border-[var(--muted)] pt-8 mt-16`}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="https://instagram.com/partiprivati_band"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)] hover:text-[var(--accent-yellow)] transition-colors duration-200"
              aria-label="Instagram"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href="https://open.spotify.com/intl-de/artist/6Ow0JcWhV1PQL2HUqagb7l?si=YIKoFmRTRDeabpSBTLQ2DQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)] hover:text-[var(--accent-yellow)] transition-colors duration-200"
              aria-label="Spotify"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </a>

            {/*Tidal */}
            <a
              href="https://tidal.com/artist/51370051/u"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)] hover:text-[var(--accent-yellow)] transition-colors duration-200"
              aria-label="Tidal"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M5.333 6l3.334 3.25l3.333 -3.25l3.333 3.25l3.334 -3.25l3.333 3.25l-3.333 3.25l-3.334 -3.25l-3.333 3.25l3.333 3.25l-3.333 3.25l-3.333 -3.25l3.333 -3.25l-3.333 -3.25l-3.334 3.25l-3.333 -3.25z" />
            </svg>
            </a>

          </div>
        </div>

        {/* Bottom section with copyright and legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-tiny text-[var(--muted)] typewriter border-t border-[var(--muted)] pt-4">
          <div className="text-center md:text-left">
            © 2025 partiprivati. Alle Rechte vorbehalten.
          </div>

          <div className="flex gap-4 text-center">
            <a
              href="/impressum"
              className="hover:text-[var(--accent-yellow)] transition-colors duration-200"
            >
              Impressum
            </a>
            <span>•</span>
            <a
              href="/datenschutz"
              className="hover:text-[var(--accent-yellow)] transition-colors duration-200"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
