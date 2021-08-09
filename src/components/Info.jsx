import React, { useContext } from "react";
import { CharactersContext } from "../context/Characters";

export default function Info() {
  const { page } = useContext(CharactersContext);
  return (
    <div className="Info">
      <p>Page: {page}</p>
    </div>
  );
}
