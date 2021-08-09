import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CharactersContext } from "../context/Characters";
import CharacterPreview from "./CharacterPreview";

export default function Characters() {
  const { characters } = useContext(CharactersContext);
  return (
    <div className="Characters">
      {characters?.map((character) => (
        <Link to={`/${character.char_id}`}>
          <CharacterPreview key={character.char_id} {...character} />
        </Link>
      ))}
    </div>
  );
}
