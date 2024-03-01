import App from "next/app";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/app/ui/home/hero"
import Aboutme from "@/app/ui/home/aboutme"

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero></Hero>
      <Aboutme></Aboutme>
     </main>
  );
}
