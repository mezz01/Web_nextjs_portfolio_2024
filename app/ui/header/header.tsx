import Link from "next/link";

export default function Footer(){
    return(
    <header className="flex justify-between h-24 items-center">
    <h2>
    <Link 
    href="/" className="text-2xl p-10">© Mohamed Amine Mezzat</Link>
    </h2>
    <ul className="flex justify-around w-64 p-4">
      <Link href="/about" className="text-xl">About</Link>
      <Link href="/blog" className="text-xl">Blog</Link>
    </ul>
   </header>
)}