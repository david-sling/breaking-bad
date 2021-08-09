import React from "react";
import { Link, useParams } from "react-router-dom";
import useCharacter from "../hooks/useCharacter";
import { dateParse } from "../utils/dateParse";
import { Icon, InlineIcon } from "@iconify/react";
import calendarRange from "@iconify/icons-mdi/calendar-range";
import CharacterPreview from "./CharacterPreview";

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
