"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { loadYamlData, type EventsData } from "@/lib/yaml-loader";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function EventsPage() {
  const [eventsData, setEventsData] = useState<EventsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadYamlData<EventsData>("events.yml")
      .then(setEventsData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("de-DE", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const isUpcoming = (dateString: string) => {
    return new Date(dateString) >= new Date();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="typewriter text-large">Loading shows...</div>
      </div>
    );
  }

  if (!eventsData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600 text-large">Failed to load events</div>
      </div>
    );
  }

  const upcomingEvents = eventsData.events.filter((event) =>
    isUpcoming(event.date)
  );
  const pastEvents = eventsData.events.filter(
    (event) => !isUpcoming(event.date)
  );

  return (
    <div className="min-h-screen p-6">
      <Navigation />
      <main>
        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <section className="space-huge">
            <div className="space-large flex flex-col items-center">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="space-large w-full max-w-md">
                  <div className="event-card">
                    <div className="space-small">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-large font-bold text-[var(--accent)]">
                          {event.venue}
                        </h3>
                      </div>
                      <p className="text-medium text-[var(--muted)] typewriter mb-4">
                        {formatDate(event.date)}
                      </p>
                      <p className="text-small typewriter mb-2">
                        {event.time} • {event.city}
                      </p>
                      <p className="text-medium mb-3 handwritten">
                        {event.description}
                      </p>
                      <div className="flex flex-col gap-2">
                        <span className="text-large font-bold text-[var(--accent)]">
                          {event.price}
                        </span>
                        {event.ticketLink && (
                          <a
                            href={event.ticketLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="indie-btn text-medium bg-[var(--accent-yellow)] text-black border-black hover:bg-[var(--accent)] hover:text-white"
                          >
                            Get Tickets
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <section className="space-huge">
            <div className="position-center space-large">
              <h2 className="text-huge">Past Shows</h2>
            </div>
            <div className="position-center space-medium">
              <p className="text-medium text-[var(--muted)] handwritten">
                Thanks to everyone who came out to these shows!
              </p>
            </div>
            <div className="space-large flex flex-col items-center">
              {pastEvents.map((event, index) => (
                <div key={index} className="space-medium w-full max-w-sm">
                  <div className="event-card opacity-75">
                    <h3 className="text-medium font-bold text-[var(--muted)]">
                      {event.venue} • {event.city}
                    </h3>
                    <p className="text-small text-[var(--muted)] typewriter">
                      {formatDate(event.date)}
                    </p>
                    <p className="text-small mt-2 handwritten">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* No Events Message */}
        {eventsData.events.length === 0 && (
          <div className="text-block-center space-huge">
            <div className="paper-bg p-12">
              <h2 className="text-huge mb-8">No Shows Scheduled</h2>
              <p className="text-medium text-[var(--muted)] mb-8 handwritten">
                We're probably in the practice room working on new songs.
                <br />
                Check back soon or follow us for updates!
              </p>
              <Link href="/" className="indie-btn text-large">
                Back to Home
              </Link>
            </div>
          </div>
        )}

        {/* Booking Info - Full width dramatic */}
        <div className="space-huge">
          <div className="text-block-wide paper-bg p-12">
            <div className="position-center space-large">
              <h2 className="text-huge mb-8">Want to Book Us?</h2>
            </div>
            <div className="position-center">
              <a
                href="mailto:hallo@partiPrivati.band"
                className="indie-btn text-large bg-[var(--accent-yellow)] text-black border-black hover:bg-[var(--accent)] hover:text-white"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer message="See you in the pit (or the corner of the room if it's an acoustic set)" />
    </div>
  );
}
