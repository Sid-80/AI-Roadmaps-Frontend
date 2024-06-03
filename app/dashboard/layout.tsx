import SideBar from "@/components/Dashboard/SideBar";
import Providers from "./providers";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex bg-[#D2DAFF] h-[100svh] w-[100svw] overflow-hidden">
      <SideBar />
      <Providers>
      {children}
      </Providers>
    </main>
  );
}
