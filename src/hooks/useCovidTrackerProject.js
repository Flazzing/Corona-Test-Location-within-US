import React, { useState, useEffect } from "react";


function useCovidTrackingProject(props) {
	const [usStats, setUsStats] = useState();
	const [isLoading, setIsLoading] = useState(false);

	// Official way of dealing parameter
	// Reference: https://fetch.spec.whatwg.org/#fetch-api
	var url = new URL("https://api.covidtracking.com/v1/us/daily.json"),
		params = { state: props };

	Object.keys(params).forEach((key) =>
		url.searchParams.append(key, params[key])
	);

	// here we fetch data with useEffect hook
	// Note: the dependency is an empty array therefore it is only called once

	useEffect(async () => {
		setIsLoading(true);
		const response = await fetch(url);
		const data = await response.json();
		const item = data;
		setUsStats(item);
		setIsLoading(false);
	}, []);

	return { usStats, isLoading };
}

export default useCovidTrackingProject;
