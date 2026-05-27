"use client";

import Link from "next/link";

const links = [
  ["Home", "/"],
  ["Welcome", "/welcome"],
  ["Journey", "/journey"],
  ["Timeline", "/timeline"],
  ["Achievements", "/achievements"],
  ["Gallery", "/gallery"],
  ["Memories", "/memories"],
  ["Letters", "/letters"],
  ["Dreams", "/dreams"],
  ["Celebration", "/celebration"]
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md rounded-full px-6 py-3 flex flex-wrap gap-4 justify-center mb-8 border border-pink-200">
      {links.map(([name, href]) => (
        <Link key={href} href={href} className="font-semibold hover:text-pink-500 transition">
          {name}
        </Link>
      ))}
    </nav>
  );
}
