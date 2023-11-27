import React from 'react';
import { fetchMortalKombatCharacters } from "@utils";
import { HomeProps } from "@types";
import { SearchBar, Hero, ShowMore } from "@components";
import MortalKombatCharacterCard from "@components/MortalKombatCharactersCard";

export default async function Home({ searchParams }: HomeProps) {
  const allCharacters = await fetchMortalKombatCharacters();
  const isDataEmpty = !Array.isArray(allCharacters) || allCharacters.length < 1 || !allCharacters;

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-0 padding-x padding-y max-width bg-black flex flex-col items-center' id='discover'>
        <div className='home__text-container text-center'>
          <h1 className='text-4xl font-extrabold'>Mortal Kombat Characters</h1>
          <p>Explore the fighters you might like</p>
        </div>

        <div className='home__filters mt-4'>
          {/* <SearchBar /> */}
        </div>

        {!isDataEmpty ? (
          <section className='w-full'>
            <div className='home__characters-wrapper flex flex-wrap justify-center'>
              {allCharacters?.map((character) => (
                <MortalKombatCharacterCard key={character.id} character={character} />
              ))}
            </div>

            {/* You can adjust the ShowMore component based on your needs */}
            {/* For example: <ShowMore pageNumber={...} isNext={...} /> */}
          </section>
        ) : (
          <div className='home__error-container mt-4 text-center'>
            <h2 className='text-white text-xl font-bold'>Oops, no results</h2>
            {/* You can display a more specific error message if needed */}
          </div>
        )}
      </div>
    </main>
  );
}
