import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>PokeNext - About</title>
      </Head>
      <div className="flex flex-col w-full h-full items-center">
        <h1 className="text-purple-800 font-black text-2xl pb-3">
          About the project
        </h1>
        <p className="max-w-screen-md text-xl">
          This project is a simple pokedex where you can access pokemon details
          to see some basic information about it, hope you like it.
        </p>{" "}
        <p className="max-w-screen-md text-xl mt-3 mb-6">
          A project that I had a lot of fun doing and I dedicated myself to
          making it as responsive and aesthetic as possible with the knowledge I
          have so far.
        </p>
        <Image
          src={"/images/gengar.png"}
          alt="gengar"
          width={400}
          height={400}
        />
      </div>
    </>
  );
}
