/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import useCurrentCTP from "../hooks/useCurrentCTP"

const errorMessage = css`
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  ${'' /* border: 5px solid #FFFF00; */}
  ${'' /* padding: 10px; */}
`

function HomePage() {
  const covidData = useCurrentCTP("US");
  console.log(covidData);
  let date = "";
  let totalCases = 0;
  let dailyCases = 0;
  if(covidData != null){
    let temp = covidData[0].date;
    let temp2 = temp.toString();
    temp2 = temp2.slice(4,6) + '-' + temp2.slice(6,8) + '-' + temp2.slice(0,4);
    date = temp2;
    totalCases = covidData[0].positive;
    dailyCases = covidData[0].positiveIncrease;
  }
  
  return (
      <div css={errorMessage}>
        <h1>Welcome to Corona Tracker!</h1>
        <h2>Data updated {date}</h2>
        <h1>Total U.S. Cases</h1>
        <h1>{totalCases}</h1>
        <h1>New Cases Today </h1>
        <h1>{dailyCases}</h1>
      </div>
  );

}

export default HomePage;