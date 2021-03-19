/** @jsxImportSource @emotion/react */
import React, {useState} from "react";
import { css } from "@emotion/react";
import useCurrentCTP from "../../hooks/useCurrentCTP"
import { Switch, Route, Redirect, Link, withRouter, useParams, useHistory} from "react-router-dom";

const statBox = css `
  margin: auto;
  width: 60%;
  margin-left: 5%;
  ${'' /* border: 5px solid #FFFF00; */}
  padding: 10px;
  display: inline-block;
  text-align:center;
  ${'' /* background-color: #FFFFFF; */}
`
function getLocationName(location) {
  if(location == "US" || location == "us") { return("United States") }
  if(location == "AL" || location == "al") { return("Alabama") }
  if(location == "AK" || location == "ak") { return("Alaska") }
  if(location == "AZ" || location == "az") { return("Arizona") }
  if(location == "AR" || location == "ar") { return("Arkansas") }
  if(location == "CA" || location == "ca") { return("California") }
  if(location == "CO" || location == "co") { return("Colorado") }
  if(location == "CT" || location == "ct") { return("Connecticut") }
  if(location == "DE" || location == "de") { return("Delaware") }
  if(location == "DC" || location == "dc") { return("District Of Columbia") }
  if(location == "FL" || location == "fl") { return("Florida") }
  if(location == "GA" || location == "ga") { return("Georgia") }
  if(location == "HI" || location == "hi") { return("Hawaii") }
  if(location == "ID" || location == "id") { return("Idaho") }
  if(location == "IL" || location == "il") { return("Illinois") }
  if(location == "IN" || location == "in") { return("Indiana") }
  if(location == "IA" || location == "ia") { return("Iowa") }
  if(location == "KS" || location == "ks") { return("Kansas") }
  if(location == "KY" || location == "ky") { return("Kentucky") }
  if(location == "LA" || location == "la") { return("Louisiana") }
  if(location == "ME" || location == "me") { return("Maine") }
  if(location == "MD" || location == "md") { return("Maryland") }
  if(location == "MA" || location == "ma") { return("Massachusetts") }
  if(location == "MI" || location == "mi") { return("Michigan") }
  if(location == "MN" || location == "mn") { return("Minnesota") }
  if(location == "MS" || location == "ms") { return("Mississippi") }
  if(location == "MO" || location == "mo") { return("Missouri") }
  if(location == "MT" || location == "mt") { return("Montana") }
  if(location == "NE" || location == "ne") { return("Nebraska") }
  if(location == "NV" || location == "nv") { return("Nevada") }
  if(location == "NH" || location == "nh") { return("New Hampshire")} 
  if(location == "NJ" || location == "nj") { return("New Jersey") }
  if(location == "NM" || location == "nm") { return("New Mexico") }
  if(location == "NY" || location == "ny") { return("New York") }
  if(location == "NC" || location == "nc") { return("North Carolina") }
  if(location == "ND" || location == "nd") { return("North Dakota") }
  if(location == "OH" || location == "oh") { return("Ohio") }
  if(location == "OK" || location == "ok") { return("Oklahoma") }
  if(location == "OR" || location == "or") { return("Oregon") }
  if(location == "PA" || location == "pa") { return("Pennsyvania") }
  if(location == "RI" || location == "ri") { return("Rhode Island") }
  if(location == "SC" || location == "sc") { return("South Carolina") }
  if(location == "SD" || location == "sd") { return("South Dakota") }                  
  if(location == "TN" || location == "tn") { return("Tennessee") }
  if(location == "TX" || location == "tx") { return("Texas") }
  if(location == "UT" || location == "ut") { return("Utah") }
  if(location == "VT" || location == "vt") { return("Vermont") }
  if(location == "VA" || location == "va") { return("Virginia") }
  if(location == "WA" || location == "wa") { return("Washington") }
  if(location == "WV" || location == "wv") { return("West Virginia") }
  if(location == "WI" || location == "wi") { return("Wisconsin") }
  if(location == "WY" || location == "wy") { return("Wyoming") }
  console.log("Location not valid: " + location);
  // history.replace("/404");
  // return "404";
}

function StatsText(props) {
  // const place = props.place;
  const { place } = useParams();
  // const { days } = useParams();
  const [location, setLocation] = useState(place);
  if(location != place){
    setLocation(place);
  }
  console.log("place: " + place);
  console.log("location: " + location);

  //data to be displayed
  let date = "";
  let totalDeaths = 0;
  let dailyDeaths = 0;
  let totalCases = 0;
  let dailyCases = 0;
  let currentHospitals = 0;
  let dailyHospitals = 0;
  // console.log(props.type);
  const covidData = useCurrentCTP(location);
  

  console.log(covidData);
  if(covidData != null) {
    if(location == "US" || location == "us"){
      let temp = covidData[0].date;
      let temp2 = temp.toString();
      console.log(temp2);
      temp2 = temp2.slice(4,6) + '-' + temp2.slice(6,8) + '-' + temp2.slice(0,4);
      date = temp2
      totalDeaths = covidData[0].death;
      dailyDeaths = covidData[0].deathIncrease;
      totalCases = covidData[0].positive;
      dailyCases = covidData[0].positiveIncrease;
      currentHospitals = covidData[0].hospitalizedCurrently;
      dailyHospitals = covidData[0].hospitalizedIncrease;
    }
    else{
      let temp = covidData['date'];
      let temp2 = temp.toString();
      console.log(temp2);
      temp2 = temp2.slice(4,6) + '-' + temp2.slice(6,8) + '-' + temp2.slice(0,4);
      date = temp2;
      totalDeaths = covidData.death;
      dailyDeaths = covidData.deathIncrease;
      totalCases = covidData.positive;
      dailyCases = covidData.positiveIncrease;
      currentHospitals = covidData.hospitalizedCurrently;
      dailyHospitals = covidData.hospitalizedIncrease;
    }
    return(
      <div css = {statBox}>
        <h2>{getLocationName(location)}</h2>
        <h3>{date}</h3>
        <p>Total Deaths: {totalDeaths}</p>
        <p>Daily Deaths: {dailyDeaths}</p>
        <p>Total Cases: {totalCases}</p>
        <p>Daily Cases: {dailyCases}</p>
        <p>Current Hospitalizatons: {currentHospitals}</p>
        <p>New Hospitalizations: {dailyHospitals}</p>
      </div>
    ); 
    // <Line data={data} width={100} height={50} options={{ maintainAspectRatio: false }}></Line>
  }
  return <div></div>
}

export default withRouter(StatsText);