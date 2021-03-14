export const TEST_LOCATION_RECEIVED = "TEST_LOCATION_RECEIVED";
export const TEST_LOCATION_UPDATED = "TEST_LOCATION_UPDATED";

/**
 * TEST_LOCATION_RECEIVED
 * {
 *   type: RECEIVE_PRODUCTS,
 *   state: The name of state to display
 * }
 */

export function receivedTestLocation(state) {
	return {
		type: TEST_LOCATION_RECEIVED,
		state,
	};
}

export function updateTestLocation(state) {
	return {
		type: TEST_LOCATION_UPDATED,
		state,
	};
}

export const FILTER_STATE_LOCATION = "FILTER_STATE_LOCATION";
/**
 * FILTER_STATE_LOCATION
 * {
 *   type: LATION_STATE_RECEIVED,
 *   state: The name of state to display
 * }
 */
export function receivedFilterStateLocation(state) {
	return {
		type: FILTER_STATE_LOCATION,
		state: state,
	};
}
