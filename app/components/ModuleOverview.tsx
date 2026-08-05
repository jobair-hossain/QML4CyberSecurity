import type { Module } from "../data/modules";
import { phases } from "../data/modules";
import { siteHref } from "../lib/site-path";
import { ModuleBreadcrumb, ModuleNav } from "./ModuleNav";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function ModuleOverview({ module }: { module: Module }) {
  return <><SiteHeader /><main>
    <section className={`module-hero module-hero-${module.number}`}><div className="module-hero-inner"><ModuleBreadcrumb module={module} /><div className="module-status-row"><span className="module-big-index">M{module.number.toString().padStart(2,"0")}</span><span className={`status-pill ${module.status}`}><span /> {module.status === "available" ? "Complete module" : "Module blueprint"}</span></div><h1>{module.title}</h1><p>{module.summary}</p><div className="hero-tags"><span>{module.level}</span><span>{module.duration}</span><span>{module.methodShort}</span></div></div></section>
    <ModuleNav module={module} />
    <section className="module-content overview-content">
      {module.status === "planned" && <div className="blueprint-notice"><strong>Structured for future development</strong><p>This module’s overview, Pre-Lab, Hands-on Lab, and Post-Lab pages define the instructional blueprint. Executable notebooks, final datasets, and assessments will be added after the technical workflow is validated.</p></div>}
      <div className="overview-lead"><div><span className="content-kicker">CYBERSECURITY CHALLENGE</span><h2>{module.challenge}</h2><p>{module.focus}</p></div><aside><span className="content-kicker">WORKFORCE CONNECTION</span><strong>{module.workforce}</strong></aside></div>
      <div className="fact-grid"><article><small>QUANTUM-AI METHOD</small><strong>{module.method}</strong></article><article><small>DATASETS</small><strong>{module.datasets.join(" · ")}</strong></article><article><small>DELIVERY</small><strong>Google Colab · Simulator first</strong></article></div>
      <section className="content-section"><span className="content-kicker">LEARNING OBJECTIVES</span><h2>What you will be able to do</h2><div className="outcome-list">{module.learningOutcomes.map((item,index)=><div key={item}><span>{String(index+1).padStart(2,"0")}</span><p>{item}</p></div>)}</div></section>
      <section className="content-section"><div className="content-heading-row"><div><span className="content-kicker">AUTHENTIC LEARNING PATH</span><h2>Three stages, one investigation</h2></div><p>Each stage produces evidence that carries into the next.</p></div><div className="phase-card-grid">{phases.map((phase,index)=><a href={siteHref(`/modules/${module.id}/${phase.id}`)} className={`phase-card phase-${index+1}`} key={phase.id}><span>0{index+1}</span><small>{phase.short.toUpperCase()}</small><h3>{phase.label}</h3><p>{index===0?module.preTopics.join(" · "):index===1?module.labSteps.slice(0,3).join(" · "):module.extensions.slice(0,3).join(" · ")}</p><strong>{module.status === "available" ? "Open stage" : "View blueprint"} →</strong></a>)}</div></section>
      {module.number===1 && <section className="launch-panel"><div><span className="content-kicker light">READY TO RUN</span><h2>Start with the concepts, then open the Colab lab.</h2><p>The complete Module 1 path includes a conceptual tutorial, an executable QSVM notebook, guided checkpoints, experimental extensions, and an assessment rubric.</p></div><div><a className="button button-light" href={siteHref("/modules/m1/pre-lab")}>Begin Pre-Lab →</a><a className="launch-secondary" href={siteHref("/downloads/QSVM_Malware_Family_Classification.ipynb")} download>Download notebook</a></div></section>}
      <div className="module-switcher"><a className={module.number===1?"disabled":""} href={siteHref(module.number===1?"/modules":`/modules/m${module.number-1}`)}>← {module.number===1?"All modules":`Module ${module.number-1}`}</a><a href={siteHref(module.number===10?"/modules":`/modules/m${module.number+1}`)}>{module.number===10?"All modules":`Module ${module.number+1}`} →</a></div>
    </section>
  </main><SiteFooter /></>;
}
