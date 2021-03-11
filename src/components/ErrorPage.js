/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

function ErrorPage({location}) {
  console.log("location: ", location);
  return (
    <>
      <div>
        <h1>
          ¯\_(ツ)_/¯
        </h1>
        <h1>
          404
        </h1>
        <h3>
          No match found for 
        </h3>
      </div>
    </>
  );

}

export default ErrorPage;