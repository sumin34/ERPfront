import React from "react";
import Card1 from "./Card1";
import Card4 from "./Card4";

function CardBody({className,expectedSales,previousSales}) {
  
  // console.log("@@@@@@@@@cardbody salesranking : ",salesRanking);
  return (
    <div className={className}>
      <Card1 
      title_info="예상 매출액"
      show_info={expectedSales}/>
      {/* {salesRanking ? (
        <Card1
          title_info="판매 순위"
          selectedGraph="circle"
          salesRanking={salesRanking}
        />
      ) : (
        <div>Loading...</div>
      )}
       */}
      <Card1 
      title_info="전날 매출액"
      show_info={previousSales}/>
      <Card4 />
    </div>
  );
}

export default CardBody;
