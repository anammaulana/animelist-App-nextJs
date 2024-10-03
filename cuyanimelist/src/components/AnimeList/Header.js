import Link from "next/link";
const Header = ({ title, linkHref, linkTitle }) => {
    return (
      <div className="flex md:flex-row flex-col justify-between items-center p-4">
        <h1 className="md:text-2xl text-md font-mono font-bold">{title}</h1>
        {linkHref && linkTitle ?
        
        <Link
          href={linkHref}
          className="text-2xl underline hover:text-indigo-500 transition-all"
        >
          {linkTitle}
          </Link>
          : null
      }
      </div>
    );
}

export default Header