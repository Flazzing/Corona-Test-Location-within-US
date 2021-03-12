/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import useTestCenters from "./hooks/useTestCenters";
import useCovidTrackingProject from "./hooks/useCovidTrackerProject"
import Navbar from "./components/navbar";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import LineChart from "./components/graph"
import FilterBar from "./components/filterBar"

const backgroundColor = css`
	background-color: #000000;
	${"" /* height: 200px; */}
`;

const chartHolder = css`
	width: 60%;
	height: 25vw;
	margin: auto;
	margin-left: 9%;
	align: center;
	display: inline-block;
`

function App() {
	//const { testLocations, isLoading } = useTestCenters("AK");
	// console.log(testLocations);

	// const { globalTracker, isGlobalLoading } = useGlobalTracker();

	return (
		<div >
			<Navbar />

			<Switch>
				<Route path="/home"></Route>
				<Route path="/statistic/us/:state/deaths">
					<FilterBar></FilterBar>
					<div css={chartHolder}>
						<LineChart length={30} type={"deathIncrease"} title={"Deaths"}></LineChart>
					</div>
				</Route>
				<Route path="/statistic/us/:state/cases">
					<FilterBar></FilterBar>
					<div css={chartHolder}>
						<LineChart length={30} type={"positiveIncrease"} title={"Cases"}></LineChart>
					</div>
				</Route>
				<Route path="/statistic/us/:state/hospitalizations">
					<FilterBar></FilterBar>
					<div css={chartHolder}>
						<LineChart length={30} type={"hospitalizedIncrease"} title={"Hospitalizations"}></LineChart>
					</div>
				</Route>
				<Route path="/statistic/us/cases">
					<FilterBar></FilterBar>
					<div css={chartHolder}>
						<LineChart length={30} type={"positiveIncrease"} title={"Cases"}></LineChart>
					</div>
				</Route>
				<Route path="/statistic/us/deaths">
					<FilterBar></FilterBar>
					<div css={chartHolder}>
						<LineChart length={30} type={"deathIncrease"} title={"Deaths"}></LineChart>
					</div>
				</Route>
				<Route path="/statistic/us/hospitalizations">
					<FilterBar></FilterBar>
					<div css={chartHolder}>
						<LineChart length={30} type={"hospitalizedIncrease"} title={"Hospitalizations"}></LineChart>
					</div>
				</Route>
				<Route path="/testlocation"></Route>
				<Route exact path="/"></Route>
			</Switch>
		</div>
	);
}

export default App;
