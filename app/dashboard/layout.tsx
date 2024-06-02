import Navbar from "@/components/Dashboard/Navbar";
import SideBar from "@/components/Dashboard/SideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-screen h-screen overflow-hidden">
      <SideBar />
      <div className="flex-1">
        <Navbar />
        {children}
      </div>
    </main>
  );
}
