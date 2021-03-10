import React, { useState, useEffect } from "react";

/**
 * API Link Reference: https://documenter.getpostman.com/view/11672223/TVCfV7fX#8ef25169-61be-649a-e013-a8160792a1a3
 *
 * Description: API for the location of Covid test center within the US
 *
 * API Call:
 *          GET: https://sheetlabs.com/NCOR/covidtestcentersinUS?state=AK
 *
 *              PARAM: state
 *
 */
function useTestCenters(props) {
	const [testLocations, setTestLocation] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	// Official way of dealing parameter
	// Reference: https://fetch.spec.whatwg.org/#fetch-api
	var url = new URL("https://sheetlabs.com/NCOR/covidtestcentersinUS"),
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
		const [item] = data;
		setTestLocation(item);
		setIsLoading(false);
	}, []);

	return { testLocations, isLoading };
}

export default useTestCenters;
