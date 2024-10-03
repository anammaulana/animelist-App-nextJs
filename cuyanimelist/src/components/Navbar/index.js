import Link from "next/link"
import InputSearch from "./InputSearch";

const Navbar = () => {
    return (
      <>
        <header className="bg-indigo-400">
          <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
            <Link href="/" className="font-bold text-xl text-white"> Portal Anime.Tv </Link>
            <InputSearch/>
          </div>
        </header>
      </>
    );
}

export default Navbar