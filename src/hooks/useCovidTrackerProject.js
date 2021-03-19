import React, { useState, useEffect } from "react";


function useCovidTrackingProject(props) {
	const [usStats, setUsStats] = useState();
	const [isLoading, setIsLoading] = useState(false);

	// Official way of dealing parameter
	// Reference: https://fetch.spec.whatwg.org/#fetch-api
	var url = "https://api.covidtracking.com/v1/us/daily.json";

	if(props) { 
		url = `https://api.covidtracking.com/v1/states/${props}/daily.json`
	}	
	
	console.log(url)
	// here we fetch data with useEffect hook
	// Note: the dependency is an empty array therefore it is only called once

	useEffect(() => {
    async function fetchData(){
      setIsLoading(true);
		  const response = await fetch(url);
		  const data = await response.json();
	  	const item = data;
		  console.log(item)
		  setUsStats(item);
		  setIsLoading(false);
    }
		fetchData();
	}, [url]);
	return { usStats, isLoading };
}

export default useCovidTrackingProject;