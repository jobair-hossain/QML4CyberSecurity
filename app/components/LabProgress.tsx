"use client";
import { useEffect, useState } from "react";
const items = ["Environment ready", "Dataset loaded", "Quantum-ready features created", "Classical baseline trained", "QSVC trained", "Results compared", "Notebook saved"];
export function LabProgress() {
  const [done, setDone] = useState<boolean[]>(items.map(() => false));
  useEffect(() => { const timer=window.setTimeout(() => { try { const saved = localStorage.getItem("qml-m1-progress"); if (saved) setDone(JSON.parse(saved)); } catch {} }, 0); return () => window.clearTimeout(timer); }, []);
  function toggle(index:number) { const next=done.map((value,i)=>i===index?!value:value); setDone(next); try { localStorage.setItem("qml-m1-progress",JSON.stringify(next)); } catch {} }
  const count=done.filter(Boolean).length;
  return <aside className="progress-card"><div className="progress-heading"><div><small>YOUR LAB PROGRESS</small><strong>{count} of {items.length} complete</strong></div><span>{Math.round(count/items.length*100)}%</span></div><div className="progress-bar"><span style={{width:`${count/items.length*100}%`}} /></div><div className="progress-items">{items.map((item,index)=><label key={item}><input type="checkbox" checked={done[index]} onChange={()=>toggle(index)} /><span>{item}</span></label>)}</div><button type="button" onClick={()=>{setDone(items.map(()=>false));try{localStorage.removeItem("qml-m1-progress")}catch{}}}>Reset progress</button></aside>;
}
