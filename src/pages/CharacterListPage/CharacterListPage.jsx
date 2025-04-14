import React, { useEffect, useState } from "react";
import CharacterCard from "./components/CharacterCard";
import BaseLayout from "../../layouts/BaseLayout";
import { createApiService } from "../../commons/utils/createApiService";
import { characterMapper, fistSeenMapper } from "./utils/mapper";

const CharacterListPage = () => {
  const { createDataService } = createApiService();
  const characterService = createDataService("character", characterMapper);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const subscription = characterService.data$.subscribe((data) => {
      setCharacters(data);
    });

    characterService.fetchWithDependency(
      "firstEpisode",
      { page: 1 },
      fistSeenMapper
    );

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    console.log("Characters:", characters);
  }, [characters]);

  return (
    // <BaseLayout>
    <>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </>
    // </BaseLayout>
  );
};

export default CharacterListPage;
