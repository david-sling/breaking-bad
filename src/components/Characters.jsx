import React, { useContext } from "react";
import { CharactersContext } from "../context/Characters";
import CharacterPreview from "./CharacterPreview";

export default function Characters() {
  const { characters } = useContext(CharactersContext);
  console.log({ characters });
  return (
    <div className="Characters">
      {characters?.map((character) => (
        <CharacterPreview key={character.char_id} {...character} />
      ))}
    </div>
  );
}
