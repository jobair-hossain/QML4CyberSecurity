import type { LearningPhase, Module } from "../data/modules";
import { phases } from "../data/modules";
import { siteHref } from "../lib/site-path";
import { M1HandsOn, M1PostLab, M1PreLab } from "./M1Learning";
import { ModuleBreadcrumb, ModuleNav } from "./ModuleNav";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

const phaseInfo = {
  "pre-lab": { label: "Pre-Lab", verb: "Learn", description: "Build the technical and cybersecurity foundation for the investigation." },
  "hands-on-lab": { label: "Hands-on Lab", verb: "Build", description: "Implement the workflow, capture evidence, and compare baselines." },
  "post-lab": { label: "Post-Lab", verb: "Extend", description: "Change the experiment, interpret tradeoffs, and communicate a defensible conclusion." },
};

function GenericPhase({ module, phase }: { module: Module; phase: LearningPhase }) {
  const isPre=phase==="pre-lab", isLab=phase==="hands-on-lab";
  const list=isPre?module.preTopics:isLab?module.labSteps:module.extensions;
  return <>
    <div className="blueprint-notice"><strong>Instructional blueprint</strong><p>This page defines the scope and student experience for a planned module. The validated notebook, dataset package, worked examples, and final assessment will be released after technical and classroom testing.</p></div>
    <section className="content-section first-section"><span className="content-kicker">{isPre?"FOUNDATION":isLab?"INVESTIGATION PLAN":"EXTENSION PLAN"}</span><h2>{isPre?`Prepare to investigate ${module.challenge.toLowerCase()}`:isLab?`Planned ${module.methodShort} workflow`:`Turn one result into a stronger study`}</h2><p className="lead-text">{isPre?`Connect the threat context, data representation, and core ideas behind ${module.method} before opening the experimental environment.`:isLab?`Use an instruction-ready subset of ${module.datasets.join(" and ")} to implement, benchmark, and interpret a reproducible ${module.methodShort} experiment.`:`Test whether the initial conclusion holds when data, model, noise, or operational assumptions change.`}</p></section>
    <section className="content-section"><span className="content-kicker">PLANNED ACTIVITIES</span><h2>{phaseInfo[phase].verb} through a focused sequence</h2><div className="planned-list">{list.map((item,index)=><article key={item}><span>{String(index+1).padStart(2,"0")}</span><div><h3>{item}</h3><p>{isPre?"Concept tutorial, worked example, and a short readiness check.":isLab?"Guided Colab section with an observable checkpoint and evidence prompt.":"Controlled add-on investigation with a comparison table and reflection prompt."}</p></div></article>)}</div></section>
    <section className="content-section"><span className="content-kicker">EVIDENCE TO CAPTURE</span><h2>{isPre?"Readiness evidence":isLab?"Laboratory artifacts":"Post-lab deliverables"}</h2><div className="deliverable-grid compact">{(isPre?["Concept map","Readiness check","Threat brief","Research question"]:isLab?["Executed notebook","Model metrics","Visual evidence","Checkpoint notes"]:["Extended notebook","Comparison table","Limitation analysis","Workforce reflection"]).map((item,index)=><div key={item}><span>0{index+1}</span><strong>{item}</strong><p>{isPre?"Shows the learner is prepared for the technical investigation.":isLab?"Documents what happened in the reproducible workflow.":"Supports a defensible claim about performance and practical relevance."}</p></div>)}</div></section>
    <section className="content-section"><span className="content-kicker">DESIGN GUARDRAILS</span><h2>How this module will avoid easy conclusions</h2><div className="guardrail-grid"><article><strong>Baseline first</strong><p>Compare the quantum or hybrid method with an appropriate classical model.</p></article><article><strong>Split carefully</strong><p>Prevent leakage and choose evaluation splits that reflect the cybersecurity question.</p></article><article><strong>Report resources</strong><p>Track qubits, circuit depth, optimizer evaluations, runtime, and simulator or hardware conditions.</p></article><article><strong>Limit claims</strong><p>Separate a promising classroom result from evidence of practical quantum advantage.</p></article></div></section>
    <div className="next-stage"><div><strong>{module.status==="planned"?"Blueprint complete":"Stage complete"}</strong><p>Review the connected module stage or return to the overview.</p></div><a className="button button-primary" href={siteHref(isPre?`/modules/${module.id}/hands-on-lab`:isLab?`/modules/${module.id}/post-lab`:`/modules/${module.id}`)}>{isPre?"View Hands-on Lab":isLab?"View Post-Lab":"Return to overview"} →</a></div>
  </>;
}

export function LearningPage({ module, phase }: { module: Module; phase: LearningPhase }) {
  const info=phaseInfo[phase];
  return <><SiteHeader /><main><section className={`learning-hero learning-hero-${phase}`}><div><ModuleBreadcrumb module={module} page={info.label} /><span className="learning-verb">{info.verb}</span><h1>{info.label}</h1><p>{info.description}</p><div className="learning-module-title"><span>M{module.number.toString().padStart(2,"0")}</span><strong>{module.title}</strong></div></div></section><ModuleNav module={module} active={phase} /><article className="module-content learning-content">{module.number===1?(phase==="pre-lab"?<M1PreLab />:phase==="hands-on-lab"?<M1HandsOn />:<M1PostLab />):<GenericPhase module={module} phase={phase} />}</article></main><SiteFooter /></>;
}

export function isLearningPhase(value:string): value is LearningPhase { return phases.some((phase)=>phase.id===value); }
