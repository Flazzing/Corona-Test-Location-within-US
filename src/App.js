/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import useTestCenters from "./hooks/useTestCenters";
import Navbar from "./components/navbar";
import { Switch, Route, Redirect, Link, useLocation} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";

const backgroundColor = css`
	background-color: #000000;
	${"" /* height: 200px; */}
`;

function App() {
	const { testLocations, isLoading } = useTestCenters("AK");
	// console.log(testLocations);

	// const { globalTracker, isGlobalLoading } = useGlobalTracker();
	return (
		<div css={backgroundColor}>
			<Navbar/>

			<Switch>
				<Route path="/home"></Route>
				<Route path="/statistic/us"></Route>
				<Route path="/statistic/us/:state"></Route>
				<Route path="/statistic/us/:states/hospitalizations"></Route>
				<Route path="/statistic/us/:states/deaths"></Route>
				<Route path="/testlocation"></Route>
				<Route exact path="/"></Route>
        <Route path="*">
          <ErrorPage location = {useLocation().pathname}/>
          {/* {history.push("/404")} */}
          {/* <Redirect to="/404"/> */}
        </Route>
			</Switch>
		</div>
	);
}

export default App;
