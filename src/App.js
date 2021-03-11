/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import useTestCenters from "./hooks/useTestCenters";
import useCovidTrackingProject from "./hooks/useCovidTrackerProject"
import Navbar from "./components/navbar";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import LineChart from "./components/graph"

const backgroundColor = css`
	background-color: #000000;
	${"" /* height: 200px; */}
`;

const chartHolder = css`
	width: 50%;
	height: 20vw;
	margin: auto;
	align: center;
`

function App() {
	//const { testLocations, isLoading } = useTestCenters("AK");
	const { usStats, isLoading } = useCovidTrackingProject("");
	console.log(usStats)
	// console.log(testLocations);

	// const { globalTracker, isGlobalLoading } = useGlobalTracker();

	return (
		<div >
			<Navbar />

			<Switch>
				<Route path="/home"></Route>
				<Route path="/statistic/us">
					<div css={chartHolder}>
						<LineChart length={30} type={"positiveIncrease"} title={"Cases"}></LineChart>
					</div>
				</Route>
				<Route path="/statistic/us/:state">
					
				</Route>
				<Route path="/statistic/us/:states/hospitalizations"></Route>
				<Route path="/statistic/us/:states/deaths"></Route>
				<Route path="/testlocation"></Route>
				<Route exact path="/"></Route>
			</Switch>
		</div>
	);
}

export default App;
