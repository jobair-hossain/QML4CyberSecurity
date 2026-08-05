import { notFound } from "next/navigation";
import { ModuleOverview } from "../../components/ModuleOverview";
import { getModule, modules } from "../../data/modules";

export function generateStaticParams() { return modules.map((module) => ({ module: module.id })); }

export default async function ModulePage({ params }: { params: Promise<{ module: string }> }) {
  const { module: id } = await params;
  const selectedModule = getModule(id);
  if (!selectedModule) notFound();
  return <ModuleOverview module={selectedModule} />;
}
