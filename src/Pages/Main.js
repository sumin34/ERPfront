import React from "react";
import CardBody from "../components/CardBody";
import Graph from "../components/Graph";

function Main() {
  return (
    <div class="content">
      <CardBody className="row g-3 mb-3"/>
      <div class="row g-3 mb-3">
      <Graph></Graph>
    </div>
    </div>
  );
}

export default Main;
