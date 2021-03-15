/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Card, Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getBookmarkLocation } from "../../redux/testLocation/selector";
import BookmarkButton from "./bookmarkButton";

function BookmarkList() {
	const bookmarkList = useSelector(getBookmarkLocation);
	console.log("bookmarkList2");
	bookmarkList.forEach((e) => {
		console.log(e);
	});

	const container = css`
		padding-top: 3%;
		background-color: #fff0e6;
		min-height: 100%;
		position: absolute;
		width: 100%;
	`;

	const cardContainer = css`
		margin: 10px;
	`;

	return (
		<div css={container}>
			<Container>
				<Col>
					<Row>
						{bookmarkList.map((element) => (
							<div css={cardContainer} key={element.centername}>
								<Card style={{ width: "18rem", height: "13rem" }}>
									<BookmarkButton
										selectedData={element}
										bookmarkerStatus={true}
									/>
									<Card.Body>
										<Card.Title>{element.centername}</Card.Title>
										<Card.Text>{element.address}</Card.Text>
										<Card.Text>
											<small className="text-muted">
												Last updated: {element.dateUpdate}
											</small>
										</Card.Text>
									</Card.Body>
								</Card>
							</div>
						))}
					</Row>
				</Col>
			</Container>
		</div>
	);
}

export default BookmarkList;
