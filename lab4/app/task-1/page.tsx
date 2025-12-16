import TaskTabs from "@/components/ui/task-tabs";
import Task1 from "@/components/ui/task-1/Task1";

export default function Task1Page() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <TaskTabs />
      <Task1 />
    </div>
  );
}
