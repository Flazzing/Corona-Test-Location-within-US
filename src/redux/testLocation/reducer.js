import { combineReducers } from "redux";
import { TEST_LOCATION_RECEIVED, TEST_LOCATION_UPDATED } from "./action";

import { FILTER_STATE_LOCATION } from "./action";

function TestLocationReducer(state = [], action) {
	switch (action.type) {
		case TEST_LOCATION_RECEIVED:
			return [
				{
					location: action.state,
				},
				...state,
			];

		case TEST_LOCATION_UPDATED:
			var x = [];
			action.state.forEach((element) => {
				x.push({ location: element });
			});
			return x;

		default:
			return state;
	}
}

function TestLocationFilterReducer(state = [], action) {
	switch (action.type) {
		case FILTER_STATE_LOCATION:
			return {
				locationState: action.state,
			};
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	testLocationList: TestLocationReducer,
	filterLocation: TestLocationFilterReducer,
});

export default rootReducer;
