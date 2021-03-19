import React, { useState, useEffect } from "react";


function useCurrentCTP(state) {
	const [covidStats, setCovidStats] = useState();

	// Official way of dealing parameter
	// Reference: https://fetch.spec.whatwg.org/#fetch-api
  console.log("state: " + state);
	var url;
	if(state == "US" || state == "us") {
		url = `https://api.covidtracking.com/v1/${state}/current.json`;
	}	
	else{
    url = `https://api.covidtracking.com/v1/states/${state}/current.json`
  }
  
	console.log(url)
	// here we fetch data with useEffect hook

  useEffect(() => {
		async function fetchCurrentData() {
			const response = await fetch(url);
			const data = await response.json();
			// console.log(data);
      setCovidStats(data);
    }
    // console.log("Beginning to fetch current stats.");
		fetchCurrentData();
    // console.log("Finished fetching current stats.")
	}, [url]);

	return covidStats
}

export default useCurrentCTP;