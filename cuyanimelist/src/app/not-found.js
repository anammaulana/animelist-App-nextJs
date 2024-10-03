"use client";
import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="min-h-screen max-w-xl mx-auto flex items-center justify-center gap-4 flex-col">
        <FileSearch size={55} className="text-color-accent" />
        <h1 className="text-color-accent text-2xl font-medium font-mono">
          PAGE NOT FOUND
              </h1>
              <Link href="/" className="text-color-primary hover:text-color-accent font-bold underline">back to home</Link>
      </div>
    </>
  );
};

export default Page;
