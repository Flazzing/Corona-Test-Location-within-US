/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

const errorMessage = css`
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  ${'' /* border: 5px solid #FFFF00; */}
  ${'' /* padding: 10px; */}
`

function ErrorPage({location}) {
  console.log("location: ", location);
  // window.history.pushState({}, '', "/404");
  return (
      <div css={errorMessage}>
        <h1>
          ¯\_(ツ)_/¯
        </h1>
        <h1>
          404
        </h1>
        <h3>
          No match found for {location}
        </h3>
      </div>
  );

}

export default ErrorPage;