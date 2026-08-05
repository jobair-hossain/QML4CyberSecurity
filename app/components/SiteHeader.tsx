import { siteHref } from "../lib/site-path";

export function BrandMark() {
  return <span className="brand-mark" aria-hidden="true"><span className="brand-orbit brand-orbit-a" /><span className="brand-orbit brand-orbit-b" /><span className="brand-core" /></span>;
}
export function SiteHeader() {
  return <header className="site-header"><a className="brand" href={siteHref("/")} aria-label="QML for Cybersecurity home"><BrandMark /><span><strong>QML</strong><small>for Cybersecurity</small></span></a><nav className="desktop-nav" aria-label="Primary navigation"><a href={siteHref("/")}>Home</a><a href={siteHref("/modules")}>Modules</a><a href={siteHref("/#learning-model")}>Learning model</a><a href={siteHref("/#about")}>About</a></nav><a className="header-cta" href={siteHref("/modules/m1")}>Start Module 1 <span aria-hidden="true">→</span></a><details className="mobile-nav"><summary aria-label="Open navigation">Menu</summary><div><a href={siteHref("/")}>Home</a><a href={siteHref("/modules")}>Modules</a><a href={siteHref("/modules/m1")}>Start Module 1</a></div></details></header>;
}
