import React from "react";
import { useParams } from "react-router-dom";
import useCharacter from "../hooks/useCharacter";
import CharacterPreview from "../components/CharacterPreview";
import { Helmet } from "react-helmet";

export default function Character() {
  const { id } = useParams();
  const { character } = useCharacter(id);
  const { appearance, portrayed } = character;
  return (
    <>
      <Helmet>
        <title>{`${character.name || ""} | BREAKING BAD`}</title>
      </Helmet>
      <div className="Character">
        <CharacterPreview {...character} full />
        {/* <div className="Details"></div> */}
      </div>
    </>
  );
}
