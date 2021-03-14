import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useTestCenters from "../../hooks/useTestCenters";
import { receivedTestLocation } from "../../redux/testLocation/action";
import { getFilterLocation } from "../../redux/testLocation/selector";

function TestLocationList() {
	const dispatch = useDispatch();

	const filterLocation = useSelector(getFilterLocation);

	var locationFilter;
	if (filterLocation.locationState == null) {
		locationFilter = "OR";
	} else {
		locationFilter = filterLocation.locationState;
	}

	const { testLocations, isLoading } = useTestCenters(locationFilter);

	useEffect(() => {
		testLocations.forEach((location) => {
			const addFilterBar = receivedTestLocation(location);
			dispatch(addFilterBar);
		});
	}, [testLocations, locationFilter]);

	return;
}

export default TestLocationList;
