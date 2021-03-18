/** @jsxImportSource @emotion/react */
import { useState } from "react";

import { BookmarkFill, BookmarkStarFill } from "react-bootstrap-icons";
import { css } from "@emotion/react";
import { useDispatch } from "react-redux";

import {
	receivedBookmarkLocation,
	removedBookmarkLocation,
} from "../../redux/testLocation/action";

import { useSelector } from "react-redux";
import { getBookmarkLocation } from "../../redux/testLocation/selector";

const bookmarkButton = css`
	margin-left: 90%;
	background: transparent;
	border: none;
`;

function BookmarkButton(selectedData) {
	const dispatch = useDispatch();
	const bookmarkList = useSelector(getBookmarkLocation);

	var value = false;
	bookmarkList.forEach((element) => {
		if (
			element.centername.localeCompare(selectedData.selectedData.centername) ===
			0
		) {
			value = true;
		}
	});

	const [bookmark, setBookmark] = useState(value);

	console.log("bookmarkList3");
	bookmarkList.forEach((e) => {
		console.log(e);
	});

	if (bookmark == true) {
		var x = {};
		bookmarkList.forEach((element) => {
			if (
				element.centername.localeCompare(
					selectedData.selectedData.centername
				) === 0
			) {
				x = {
					centername: element.centername,
					address: element.address,
					dateUpdate: element.dateUpdate,
				};
			}
		});
		return (
			<div>
				{bookmark ? (
					<button
						css={bookmarkButton}
						onClick={() => {
							const removedBookmark = removedBookmarkLocation(x.centername);
							setBookmark(false);
							dispatch(removedBookmark);
						}}
					>
						<BookmarkStarFill size={20} />
					</button>
				) : (
					<button
						css={bookmarkButton}
						onClick={() => {
							const addBookmark = receivedBookmarkLocation(
								x.centername,
								x.address,
								x.dateUpdate
							);
							setBookmark(true);
							dispatch(addBookmark);
						}}
					>
						<BookmarkFill size={20} />
					</button>
				)}
			</div>
		);
	} else {
		return (
			<div>
				{bookmark ? (
					<button
						css={bookmarkButton}
						onClick={() => {
							const removedBookmark = removedBookmarkLocation(
								selectedData.selectedData.centername
							);
							setBookmark(false);
							dispatch(removedBookmark);
						}}
					>
						<BookmarkStarFill size={20} />
					</button>
				) : (
					<button
						css={bookmarkButton}
						onClick={() => {
							const addBookmark = receivedBookmarkLocation(
								selectedData.selectedData.centername,
								selectedData.selectedData.address,
								selectedData.selectedData.lastupdateddate
							);
							setBookmark(true);
							dispatch(addBookmark);
						}}
					>
						<BookmarkFill size={20} />
					</button>
				)}
			</div>
		);
	}
}

export default BookmarkButton;
