interface FooterProps {
  message?: string;
  className?: string;
}

export default function Footer({
  message = "Made with ♡ and questionable decisions in Freiburg",
  className = "mt-16 position-right",
}: FooterProps) {
  return (
    <footer className={className}>
      <p className="text-[var(--muted)] typewriter text-tiny">{message}</p>
    </footer>
  );
}
