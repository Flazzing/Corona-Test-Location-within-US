/** @jsxImportSource @emotion/react */
import React, {useState} from "react";
import { css } from "@emotion/react";
import {Line} from 'react-chartjs-2'
import useCovidTrackingProject from "./../hooks/useCovidTrackerProject"
import { useParams } from "react-router-dom"
import LineChart from "./graph"
import FilterBar from "./filterBar"


function graphPage() {
    return(
        <>
            <FilterBar></FilterBar>
            <div css={chartHolder}>
                <LineChart length={30} type={"positiveIncrease"} title={"Cases"}></LineChart>
            </div>
        </>
    );
}