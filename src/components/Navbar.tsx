import Image from "next/image";
import ListTemplate from "./templates/ListTemplate";

export default function Navbar() {
  return (
    <div className="flex flex-row bg-purple-900 w-full h-16 items-center">
      <div className="flex flex-row items-center p-1">
        <Image
          src={"/images/masterball.png"}
          alt={"pokedex"}
          height={40}
          width={40}
        />
        <h1 className="pl-1.5">
          <span className="text-white text-xl font-bold">Poke</span>
          <span className="text-purple-300 text-xl font-bold">Next</span>
        </h1>
      </div>
      <ul className={`flex flex-row`}>
        <ListTemplate link="/" title="Homepage" />
        <ListTemplate link="/about" title="About" />
      </ul>
    </div>
  );
}
