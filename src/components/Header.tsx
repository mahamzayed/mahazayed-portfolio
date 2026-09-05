import { useEffect, useState } from "react";
import { site } from "../content";

const links = [
  ["Projects", "#projects"],
  ["About", "#about"],
  ["Experience", "#experience"],
];

export default function Header() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > last && y > 120);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${hidden ? "is-hidden" : ""}`}>
      <div className="wrap header-inner">
        <a href="#top" className="brand">{site.name}</a>
        <nav className="nav">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <a href="#contact" className="btn btn-solid">Contact</a>
        </nav>
      </div>
    </header>
  );
}
