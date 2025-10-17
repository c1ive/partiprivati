"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ImpressumPage() {
  return (
    <div className="min-h-screen p-6">
      <Navigation />

      <main className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="space-huge">
          <div className="position-center space-medium">
            <h1 className="roboto-black text-huge text-[var(--accent-yellow)]">
              Impressum
            </h1>
          </div>
        </header>

        {/* Content */}
        <div className="space-large">
          <div className="text-block-center paper-bg p-8">
            <div className="space-medium text-left">
              <h2 className="text-large font-bold mb-4 text-[var(--accent)]">
                Angaben gemäß § 5 TMG
              </h2>

              <div className="mb-6">
                <h3 className="text-medium font-bold mb-2">
                  Verantwortlich für den Inhalt:
                </h3>
                <p className="text-medium mb-2">Partiprivati GbR</p>
                <p className="text-medium mb-2">Carl-Kistner-Straße 66</p>
                <p className="text-medium mb-2">Haslach</p>
                <p className="text-medium mb-2">79115 Freiburg im Breisgau</p>
                <p className="text-medium mb-2">Deutschland</p>
                <p className="text-medium mb-2">USt-IdNr.: DE453428120</p>
              </div>

              <div className="mb-6">
                <h3 className="text-medium font-bold mb-2">Kontakt:</h3>
                <p className="text-small text-[var(--muted)]">
                  E-Mail: info@partiprivati-band.de
                  <br />
                  Instagram: @partiprivati_band
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-medium font-bold mb-2">
                  Haftungsausschluss:
                </h3>
                <p className="text-small text-[var(--muted)] leading-relaxed">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt
                  erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
                  der Inhalte können wir jedoch keine Gewähr übernehmen. Als
                  Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                  Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                  verantwortlich.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-medium font-bold mb-2">Urheberrecht:</h3>
                <p className="text-small text-[var(--muted)] leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                  diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                  Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                  Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
                  der schriftlichen Zustimmung des jeweiligen Autors bzw.
                  Erstellers.
                </p>
              </div>

              <div>
                <h3 className="text-medium font-bold mb-2">Externe Links:</h3>
                <p className="text-small text-[var(--muted)] leading-relaxed">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                  deren Inhalte wir keinen Einfluss haben. Deshalb können wir
                  für diese fremden Inhalte auch keine Gewähr übernehmen. Für
                  die Inhalte der verlinkten Seiten ist stets der jeweilige
                  Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to home */}
        <div className="space-large position-center">
          <a
            href="/"
            className="indie-btn text-large bg-[var(--accent-yellow)] text-black border-black hover:bg-[var(--accent)] hover:text-white"
          >
            Zurück zur Startseite
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
