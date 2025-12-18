import TaskTabs from "@/components/ui/task-tabs";
import Tab1 from "@/components/ui/task-1/counter-lab5";

export default function Task1Page() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <TaskTabs />
      <Tab1 />
    </div>
  );
}
