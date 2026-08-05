import { notFound } from "next/navigation";
import { LearningPage, isLearningPhase } from "../../../components/LearningPage";
import { getModule, modules, phases } from "../../../data/modules";

export function generateStaticParams() { return modules.flatMap((module)=>phases.map((phase)=>({module:module.id,phase:phase.id}))); }
export default async function PhasePage({params}:{params:Promise<{module:string;phase:string}>}) {
  const values=await params; const selectedModule=getModule(values.module);
  if(!selectedModule || !isLearningPhase(values.phase)) notFound();
  return <LearningPage module={selectedModule} phase={values.phase} />;
}
