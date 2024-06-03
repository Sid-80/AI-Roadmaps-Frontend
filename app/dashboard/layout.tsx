import SideBar from "@/components/Dashboard/SideBar";
import Providers from "./providers";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex bg-[#D2DAFF] w-screen h-screen overflow-hidden">
      <SideBar />
      <Providers>
      {children}
      </Providers>
    </main>
  );
}
