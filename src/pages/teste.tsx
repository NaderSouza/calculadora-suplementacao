import Image from "next/image";
import { Inter } from "next/font/google";
import { Fira_Code } from "next/font/google";
import { Select, Option } from "@material-tailwind/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    //  TELA TODA

    <main
      className={`min-h-screen min-w-screen w-screen h-screen bg-slate-950 ${inter.className}`}
    >
      {/* CONTAINER DO FORM */}
      <section className="max-w-screen-xl  m-auto pt-20 bg-slate-950">
        <div className="w-72">
          <Select label="Escolha a sua marca" placeholder={undefined}>
            <Option>Material Tailwind HTML</Option>
            <Option>Material Tailwind React</Option>
            <Option>Material Tailwind Vue</Option>
            <Option>Material Tailwind Angular</Option>
            <Option>Material Tailwind Svelte</Option>
          </Select>
        </div>

        <div>{/* texto resultado */}</div>
      </section>
      <div>{/* modal de texto */}</div>
    </main>
  );
}
