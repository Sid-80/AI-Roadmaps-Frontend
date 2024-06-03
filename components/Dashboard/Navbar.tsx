import SearchBar from "./SearchBar";

export default function Navbar() {

  return (
    <div className="flex bg-[#D2DAFF] text-[#1B262C] p-4 items-center justify-between">
      <div>
        <h1 className=" font-bold text-xl --font-roboto-mono">Dashboard</h1>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
}
