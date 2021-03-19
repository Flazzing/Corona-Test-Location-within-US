/** @jsxImportSource @emotion/react */
import React, {useState} from "react";
import { css } from "@emotion/react";
// import useCurrentCTP from "./../hooks/useCurrentCTP"
import { useParams } from "react-router-dom"
import StatsText from "./StatsText"
import StatsFilter from "./StatsFilter"

function StatsPage() {
  const { state } = useParams();
    return(
        <div>
            <StatsFilter/>
            <>
              {/* {props.children} */}
              <StatsText place={state}/>
            </>
        </div>
    );
}
export default StatsPage;