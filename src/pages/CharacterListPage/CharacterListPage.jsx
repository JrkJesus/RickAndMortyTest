import React from "react";
import CharacterCard from "./components/CharacterCard";
import characters from "../../_mocks_/myCharacter.json";
import BaseLayout from "../../layouts/BaseLayout";

const CharacterListPage = () => {
  return (
    // <BaseLayout>
    <CharacterCard character={characters[0]} />
    // </BaseLayout
  );
};

export default CharacterListPage;
