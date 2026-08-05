import type { Module } from "../data/modules";
import { siteHref } from "../lib/site-path";
export function ModuleCard({ module }: { module: Module }) {
  return <article className={`module-card module-${module.number}`}><div className="module-card-top"><span className="module-index">M{module.number.toString().padStart(2, "0")}</span><span className={`status-pill ${module.status}`}><span /> {module.status === "available" ? "Ready now" : "Blueprint ready"}</span></div><h3>{module.title}</h3><p>{module.summary}</p><div className="module-meta"><span>{module.methodShort}</span><span>{module.duration}</span></div><a className="card-link" href={siteHref(`/modules/${module.id}`)} aria-label={`Explore ${module.title}`}>Explore module <span aria-hidden="true">↗</span></a></article>;
}
