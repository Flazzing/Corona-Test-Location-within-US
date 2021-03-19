/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import useCurrentCTP from "../hooks/useCurrentCTP"



const homeMessage = css`
  text-align: center;
  ${'' /* position: absolute; */}
  margin: auto;
  margin-top: 5%;
  width: 60%;
  ${'' /* border: 5px solid #FFFF00; */}
  padding: 10px;
`
const titleDiv = css`
  margin-bottom: 8%;
`
const titleText = css`
  font-size: 4vw;
`
const subTitle = css`
  font-size: 2vw;
  color: #707070;
`
const dataDiv = css`
  margin-bottom: 5%;
`
const dataText = css`
  font-size: 2.5vw;
`

function HomePage() {
  const { covidData, isLoading } = useCurrentCTP("US");
  console.log(covidData);
  let date = "";
  let totalCases = 0;
  let dailyCases = 0;
  if (covidData != null) {
    let temp = covidData[0].date;
    let temp2 = temp.toString();
    temp2 = temp2.slice(4, 6) + '-' + temp2.slice(6, 8) + '-' + temp2.slice(0, 4);
    date = temp2;
    totalCases = covidData[0].positive;
    dailyCases = covidData[0].positiveIncrease;
  }

  return (
    <div css={homeMessage}>
      <div css={titleDiv}>
        <h1 css={titleText}>Welcome to Corona Tracker!</h1>
        <h2 css={subTitle}>Data last updated: {date}</h2>
      </div>

      <div css={dataDiv}>
        <h1 css={dataText}>Total U.S. Cases</h1>
        <h1 css={dataText}>{totalCases}</h1>
      </div>
      <div css={dataDiv}>
        <h1 css={dataText}>New Cases Today </h1>
        <h1 css={dataText}>{dailyCases}</h1>
      </div>


    </div>
  );

}

export default HomePage;