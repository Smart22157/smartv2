import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#050505] text-white">

      <Sidebar />

      <div className="ml-72">

        <Topbar />

        <main className="p-10">
          {children}
        </main>

      </div>

    </div>
  );
}