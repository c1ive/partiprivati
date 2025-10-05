"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen p-6">
      <Navigation />

      <main className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="space-huge">
          <div className="position-center space-medium">
            <h1 className="roboto-black text-huge text-[var(--accent-yellow)]">
              Datenschutzerklärung
            </h1>
          </div>
        </header>

        {/* Content */}
        <div className="space-large">
          <div className="text-block-center paper-bg p-8">
            <div className="space-medium text-left">
              <h2 className="text-large font-bold mb-4 text-[var(--accent)]">
                Datenschutz
              </h2>

              <div className="mb-6">
                <h3 className="text-medium font-bold mb-2">
                  Allgemeiner Hinweis:
                </h3>
                <p className="text-small text-[var(--muted)] leading-relaxed">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                  persönlichen Daten sehr ernst. Wir behandeln Ihre
                  personenbezogenen Daten vertraulich und entsprechend der
                  gesetzlichen Datenschutzvorschriften sowie dieser
                  Datenschutzerklärung.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-medium font-bold mb-2">
                  Datenerfassung auf unserer Website:
                </h3>
                <p className="text-small text-[var(--muted)] leading-relaxed mb-4">
                  <strong>
                    Wer ist verantwortlich für die Datenerfassung auf dieser
                    Website?
                  </strong>
                  <br />
                  Die Datenverarbeitung auf dieser Website erfolgt durch den
                  Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
                  dieser Website entnehmen.
                </p>
                <p className="text-small text-[var(--muted)] leading-relaxed">
                  <strong>Wie erfassen wir Ihre Daten?</strong>
                  <br />
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns
                  diese mitteilen. Hierbei kann es sich z.B. um Daten handeln,
                  die Sie in ein Kontaktformular eingeben.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-medium font-bold mb-2">
                  Server-Log-Dateien:
                </h3>
                <p className="text-small text-[var(--muted)] leading-relaxed">
                  Der Provider der Seiten erhebt und speichert automatisch
                  Informationen in so genannten Server-Log-Dateien, die Ihr
                  Browser automatisch an uns übermittelt. Dies sind: Browsertyp
                  und Browserversion, verwendetes Betriebssystem, Referrer URL,
                  Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage
                  und IP-Adresse.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-medium font-bold mb-2">Externe Links:</h3>
                <p className="text-small text-[var(--muted)] leading-relaxed">
                  Diese Website enthält Links zu externen Websites (Instagram,
                  Spotify, Bandcamp), die nicht von uns betrieben werden. Sobald
                  Sie diese Links anklicken, haben wir keinen Einfluss mehr auf
                  die Datenerhebung. Informieren Sie sich über den Datenschutz
                  dieser externen Websites direkt bei den entsprechenden
                  Anbietern.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-medium font-bold mb-2">Ihre Rechte:</h3>
                <p className="text-small text-[var(--muted)] leading-relaxed">
                  Sie haben jederzeit das Recht unentgeltlich Auskunft über
                  Herkunft, Empfänger und Zweck Ihrer gespeicherten
                  personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                  Recht, die Berichtigung, Sperrung oder Löschung dieser Daten
                  zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema
                  Datenschutz können Sie sich jederzeit unter der im Impressum
                  angegebenen Adresse an uns wenden.
                </p>
              </div>

              <div>
                <p className="text-tiny text-[var(--muted)] italic">
                  Stand: Oktober 2025
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
