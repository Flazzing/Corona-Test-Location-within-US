/** @jsxImportSource @emotion/react */
import { useSelector } from "react-redux";
import { css } from "@emotion/react";

import Navbar from "./components/navbar";
import { Switch, Route, Redirect, Link, useLocation} from "react-router-dom";
import { getTestLocationList } from "./redux/testLocation/selector";

import testLocationRedux from "./components/testLocationComponents/testLocationRedux";
import MapApp from "./components/testLocationComponents/app";
import BookmarkList from "./components/testLocationComponents/bookmarkList";
import LineChart from "./components/graphComponents/graph"
import FilterBar from "./components/graphComponents/filterBar"
import ErrorPage from "./components/ErrorPage";
import StatsPage from "./components/statsComponents/StatsPage";
import StatsFilter from "./components/statsComponents/StatsFilter";
import StatsText from "./components/statsComponents/StatsText"

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
	background-color: white;
`

const backgroundC = css`
	background-color: white;
`

function App() {
	testLocationRedux();

	return (
		<div css={backgroundC}>
			<Navbar/>

			<Switch>
				<Route path="/home"></Route>
				<Route path="/graph/us/:state/deaths/:days">
					<div css={backgroundC}>
						<FilterBar></FilterBar>
						<div css={chartHolder}>
							<LineChart length={30} type={"deathIncrease"} title={"Deaths"}></LineChart>
						</div>
					</div>
				</Route>
				<Route path="/graph/us/:state/cases/:days">
					<div css={backgroundC}>
						<FilterBar></FilterBar>
						<div css={chartHolder}>
							<LineChart length={30} type={"positiveIncrease"} title={"Cases"}></LineChart>
						</div>
					</div>
				</Route>
				<Route path="/graph/us/:state/hospitalizations/:days">
					<div css={backgroundC}>
						<FilterBar></FilterBar>
						<div css={chartHolder}>
							<LineChart length={30} type={"hospitalizedIncrease"} title={"Hospitalizations"}></LineChart>
						</div>
					</div>
				</Route>
				<Route path="/graph/us/cases/:days">
					<div css={backgroundC}>
						<FilterBar></FilterBar>
						<div css={chartHolder}>
							<LineChart length={30} type={"positiveIncrease"} title={"Cases"}></LineChart>
						</div>
					</div>
				</Route>
				<Route path="/graph/us/deaths/:days">
					<div css={backgroundC}>
						<FilterBar></FilterBar>
						<div css={chartHolder}>
							<LineChart length={30} type={"deathIncrease"} title={"Deaths"}></LineChart>
						</div>
					</div>
				</Route>
				<Route path="/graph/us/hospitalizations/:days">
					<div css={backgroundC}>
						<FilterBar></FilterBar>
						<div css={chartHolder}>
							<LineChart length={30} type={"hospitalizedIncrease"} title={"Hospitalizations"}></LineChart>
						</div>
					</div>
				</Route>

				{/* <Route path="/statistic/us"></Route> */}
				<Route path="/statistic/:place">
          			<StatsPage/>
        		</Route>
        <Route path="/statistic/:place/cases"></Route>
				<Route path="/statistic/:place/hospitalizations"></Route>
				<Route path="/statistic/:place/deaths"></Route>

				<Route exact path="/testlocation">
					<MapApp />
				</Route>
				<Route exact path="/testlocation/bookmark">
					<BookmarkList />
				</Route>
				<Route exact path="/"></Route>
        <Route path="*">
        {/* <div css={backgroundC}> */}
          <ErrorPage location = {useLocation().pathname}/>
          
        {/* </div> */}
          
        </Route>
			</Switch>
		</div>
	);
}

export default App;
