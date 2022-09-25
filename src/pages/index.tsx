export async function getStaticProps() {
  const limit = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";
  const res = await fetch(`${api}?limit=${limit}`);
  const data = await res.json();

  data.results.forEach((item: any, index: number) => {
    item.id = index + 1;
  });

  return {
    props: { pokemons: data.results },
  };
}

export default function Home({ pokemons }: any) {
  return (
    <>
      <div className="flex justify-center items-center mb-5">
        <h1 className="font-black text-3xl text-purple-800">Pokemons</h1>
      </div>
      <div className="flex justify-center w-full">
        <div className="flex flex-wrap max-w-5xl justify-center space-x-2 ">
          {pokemons.map((pokemon: any) => (
            <p key={pokemon.id}>{pokemon.name}</p>
          ))}
        </div>
      </div>
    </>
  );
}
