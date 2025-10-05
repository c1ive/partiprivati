"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="mb-12">
      <div className="flex flex-row justify-center gap-8">
        <div className="flex items-start justify-around">
          <Image src="/Bildmarke-5.svg" alt="Logo" width={20} height={20} />
        </div>

        <Link
          href="/"
          className={`nav-link text-medium ${
            pathname === "/" ? "text-[var(--accent)]" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/events"
          className={`nav-link text-medium ${
            pathname === "/events" ? "text-[var(--accent)]" : ""
          }`}
        >
          Live
        </Link>
        <Link
          href="/releases"
          className={`nav-link text-medium ${
            pathname === "/releases" ? "text-[var(--accent)]" : ""
          }`}
        >
          Releases
        </Link>
      </div>
    </nav>
  );
}
