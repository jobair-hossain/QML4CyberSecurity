import type { Module } from "../data/modules";
import { phases } from "../data/modules";
import { siteHref } from "../lib/site-path";

export function ModuleNav({ module, active = "overview" }: { module: Module; active?: string }) {
  return <nav className="module-nav" aria-label={`${module.title} sections`}>
    <a className={active === "overview" ? "active" : ""} href={siteHref(`/modules/${module.id}`)}><small>00</small>Overview</a>
    {phases.map((phase, index) => <a className={active === phase.id ? "active" : ""} href={siteHref(`/modules/${module.id}/${phase.id}`)} key={phase.id}><small>0{index + 1}</small>{phase.label}</a>)}
  </nav>;
}

export function ModuleBreadcrumb({ module, page }: { module: Module; page?: string }) {
  return <div className="breadcrumb"><a href={siteHref("/modules")}>Modules</a><span>/</span><a href={siteHref(`/modules/${module.id}`)}>M{module.number}</a>{page && <><span>/</span><strong>{page}</strong></>}</div>;
}
