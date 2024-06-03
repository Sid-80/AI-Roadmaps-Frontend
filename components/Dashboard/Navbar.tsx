import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="flex flex-col sm:flex-row bg-[#D2DAFF] text-[#1B262C] p-4 items-center justify-between">
      <div className="w-full items-start p-2 sm:p-0">
        <h1 className=" font-bold text-xl --font-roboto-mono">Dashboard</h1>
      </div>
      <SearchBar />
    </div>
  );
}
