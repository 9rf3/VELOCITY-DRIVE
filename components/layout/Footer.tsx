import Link from "next/link";

const footerLinks = [
  { href: "/fleet", label: "Explore Fleet" },
  { href: "/compare", label: "Compare Vehicles" },
  { href: "#", label: "Privacy" },
  { href: "#", label: "Terms" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark-black">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <Link href="/" className="group">
            <span className="font-heading text-lg font-bold tracking-[0.15em] text-platinum">
              VELOCITY
              <span className="text-accent-blue ml-0.5">DRIVE</span>
            </span>
          </Link>

          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-xs tracking-wider text-silver transition-colors duration-300 hover:text-platinum"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center">
          <p className="font-body text-xs tracking-wider text-silver/50">
            &copy; {new Date().getFullYear()} VelocityDrive. All rights
            reserved. This is a concept showcase.
          </p>
        </div>
      </div>
    </footer>
  );
}
