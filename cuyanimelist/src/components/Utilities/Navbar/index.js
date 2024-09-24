import Link from "next/link"

const Navbar = () => {
    return (
      <>
        <header className="bg-indigo-400">
          <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
            <Link href="" className="font-bold text-xl text-white"> Cuy AnimeList </Link>
            <input placeholder="search anime..." className=""></input>
          </div>
        </header>
      </>
    );
}

export default Navbar