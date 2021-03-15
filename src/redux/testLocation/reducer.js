import { combineReducers } from "redux";
import {
	TEST_LOCATION_RECEIVED,
	TEST_LOCATION_UPDATED,
	BOOKMARK_LOCATION_RECEIVED,
	BOOKMARK_LOCATION_DELETE,
} from "./action";

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

function BookmarkLocationReducer(state = [], action) {
	let isDuplicate = false;
	switch (action.type) {
		case BOOKMARK_LOCATION_RECEIVED:
			state.forEach((element) => {
				if (element.centername.localeCompare(action.centername) === 0) {
					isDuplicate = true;
				}
			});

			if (isDuplicate === true) {
				return [...state];
			} else {
				return [
					{
						centername: action.centername,
						address: action.address,
						dateUpdate: action.dateUpdate,
					},
					...state,
				];
			}
		case BOOKMARK_LOCATION_DELETE:
			const index = state.findIndex((x) => x.centername === action.centername);
			// if (index !== undefined) state.splice(index, 1);

			const result = state.filter(
				(element) => element.centername != action.centername
			);
			console.log(result);
			return result;

		default:
			return state;
	}
}

const rootReducer = combineReducers({
	testLocationList: TestLocationReducer,
	filterLocation: TestLocationFilterReducer,
	bookmarkLocation: BookmarkLocationReducer,
});

export default rootReducer;
