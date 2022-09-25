import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const getStaticPaths = async () => {
  const limit = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";
  const res = await fetch(`${api}?limit=${limit}`);
  const data = await res.json();

  const paths = data.results.map((pokemon: any, index: number) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  return { props: { pokemon: data } };
};

export default function PokemonId({ pokemon }: any) {
  return (
    <>
      <Head>
        <title>PokeNext - {pokemon.name}</title>
      </Head>
      <div className="flex flex-col items-center mt-6">
        <div className="bg-white p-7 rounded-lg border shadow-lg hover:scale-110 transition hover:shadow-2xl">
          <h1 className="mb-4 uppercase text-center font-black bg-purple-500 rounded-lg text-white">
            #{pokemon.id} <span>{pokemon.name}</span>
          </h1>
          <Image
            alt={`pokemon-${pokemon.id}`}
            src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
            height={200}
            width={200}
          />
          <div className="p-3">
            <div>
              <h3 className="font-black text-lg text-purple-500">Types:</h3>
              <div className="space-x-3 text-center m-2 ">
                {pokemon.types.map((el: any, index: number) => (
                  <span
                    className={`font-bold text-lg uppercase p-2 bg-slate-500 rounded-lg ${
                      "type_" + el.type.name
                    } text-white`}
                    key={index}
                  >
                    {el.type.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-black text-lg text-purple-500">Height:</h3>
              <span className="font-bold text-lg">
                {pokemon.height * 10} cm
              </span>
            </div>

            <div>
              <h3 className="font-black text-lg text-purple-500">Weight:</h3>
              <span className="font-bold text-lg">
                {pokemon.weight / 10} kg
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-10 justify-center">
        <Link href="/">
          <span className="font-black p-2 bg-purple-500 hover:bg-purple-700 transition rounded-lg text-white cursor-pointer">
            Back to Pokemons
          </span>
        </Link>
      </div>
    </>
  );
}
