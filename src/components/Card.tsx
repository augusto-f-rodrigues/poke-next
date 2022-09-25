import Image from "next/image";
import Link from "next/link";

export default function Card({ pokemon }: any) {
  return (
    <div className="flex flex-col w-1/5 min-w-fit mb-7 ml-2 bg-white rounded-lg p-8 border shadow-lg">
      <Image
        alt={`pokemon-${pokemon.id}`}
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        height={120}
        width={120}
      />
      <div className="flex flex-col items-center mt-4 uppercase">
        <span className="font-black text-white bg-purple-900 rounded-lg p-1">
          #{pokemon.id}
        </span>
        <h3 className="font-black">{pokemon.name}</h3>
        <Link href={`/pokemon/${pokemon.id}`}>
          <a className="bg-purple-400 p-1.5 rounded-lg font-black text-white hover:bg-purple-700 grow transition hover:scale-110">
            Details
          </a>
        </Link>
      </div>
    </div>
  );
}
