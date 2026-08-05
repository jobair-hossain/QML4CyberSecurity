import type { Metadata } from "next";
import { ModuleCard } from "../components/ModuleCard";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { modules } from "../data/modules";
export const metadata: Metadata = { title: "Learning Modules" };
export default function ModulesPage() { return <><SiteHeader /><main><section className="page-hero"><div className="eyebrow"><span /> Repository map</div><h1>Ten authentic Quantum-AI cybersecurity modules</h1><p>Every module pairs a real cybersecurity challenge with a focused quantum or hybrid method, an instruction-ready dataset plan, and a workforce connection.</p></section><section className="section compact-top"><div className="module-legend"><span><i className="legend-dot ready" /> Module 1: complete learning experience</span><span><i className="legend-dot" /> Modules 2-10: structured blueprints</span></div><div className="module-grid">{modules.map((module) => <ModuleCard module={module} key={module.id} />)}</div></section></main><SiteFooter /></>; }
