import React from "react";
import Circlegraph from "../components/Circlegraph";
import Card1 from "../components/Card1";

function Tete() {
  const height = "80px";

  return (
    <Card1>
      <Circlegraph
        height={height}
      ></Circlegraph>
    </Card1>
  );
}

export default Tete;