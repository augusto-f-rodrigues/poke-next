import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full h-full items-center">
        <h1 className="text-purple-800 font-black text-2xl pb-3">
          About the project
        </h1>
        <p className="max-w-screen-md text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          explicabo cumque iusto, voluptas aut assumenda repellat accusamus! In
          ullam dolorum error est expedita ut vitae eveniet accusantium!
          Laudantium, ab temporibus.
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
