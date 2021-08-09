import React from "react";
import { useParams } from "react-router-dom";
import useCharacter from "../hooks/useCharacter";
import CharacterPreview from "../components/CharacterPreview";

export default function Character() {
  const { id } = useParams();
  const { character } = useCharacter(id);
  console.log({ character });
  const { appearance, portrayed } = character;
  return (
    <div className="Character">
      <CharacterPreview {...character} full />
      {/* <div className="Details"></div> */}
    </div>
  );
}
