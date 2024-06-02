import Navbar from "@/components/Dashboard/Navbar";
import SideBar from "@/components/Dashboard/SideBar";
import ChatBox from "@/components/Dashboard/ChatBox";
import Providers from "./providers";
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
        <Providers>
        {children}
        </Providers>
      </div>
      
    </main>
  );
}
