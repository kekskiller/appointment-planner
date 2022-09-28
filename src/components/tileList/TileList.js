import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  const {list} = props;

  return (
    <div>
      {list.map((tile, index) => (
        <Tile key={index} tile={tile} />
      ))}
    </div>
  );
};
