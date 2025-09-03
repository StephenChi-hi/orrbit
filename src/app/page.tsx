import ModeratorsTable from "@/components/ModeratorsTable";
import SideBar from "@/components/SideBar";
import TopNavBar from "@/components/TopNavBar";

export default function Home() {
  return (
    <div>
      <TopNavBar />
      <div className="grid grid-cols-12 min-h-screen px-[10px]">
        {/* Sidebar */}
        <SideBar />

        {/* Main Content */}
        <main className="col-span-9 px-[10px]">
          <ModeratorsTable />
        </main>
      </div>
    </div>
  );
}
