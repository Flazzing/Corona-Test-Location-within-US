export const TEST_LOCATION_RECEIVED = "TEST_LOCATION_RECEIVED";
export const TEST_LOCATION_UPDATED = "TEST_LOCATION_UPDATED";
export const BOOKMARK_LOCATION_RECEIVED = "BOOKMARK_LOCATION_RECEIVED";
export const BOOKMARK_LOCATION_DELETE = "BOOKMARK_LOCATION_DELETE";

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

/**
 * BOOKMARK_LOCATION_RECEIVED
 * {
 *   type: BOOKMARK_LOCATION_RECEIVED,
 *   centername: The name of state to display
 *   address: the address of the test location
 * 	 last updated
 * }
 */

export function receivedBookmarkLocation(centername, address, dateUpdate) {
	return {
		type: BOOKMARK_LOCATION_RECEIVED,
		centername: centername,
		address: address,
		dateUpdate: dateUpdate,
	};
}

export function removedBookmarkLocation(centername) {
	return {
		type: BOOKMARK_LOCATION_DELETE,
		centername: centername,
	};
}
