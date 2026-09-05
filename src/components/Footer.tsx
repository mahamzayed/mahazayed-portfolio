import { site } from "../content";

export default function Footer() {
  return (
    <footer className="site-footer wrap">
      <span>© {new Date().getFullYear()} {site.name}</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
