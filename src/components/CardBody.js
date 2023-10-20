import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";

function CardBody({className}) {
  return (
    <div class={className}>
      <Card1 
      title_info="예상 매출액"
      show_info="47mil"/>
      <Card1 
      title_info="판매 순위"
      show_info="제일높은제품"
      selectedGraph="circle"/>
      <Card1 
      title_info="월 매출액"
      show_info="500mil"/>
      <Card4 />
    </div>
  );
}

export default CardBody;
