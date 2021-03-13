/** @jsxImportSource @emotion/react */
import React, {useState} from "react";
import { css } from "@emotion/react";
import {Line} from 'react-chartjs-2'
import useCovidTrackingProject from "./../hooks/useCovidTrackerProject"
import { useParams } from "react-router-dom"


function LineChart(props) {
    const { state } = useParams();
    const [st, setST] = useState(state)
    if(state != st) {
        setST(state)
    }
    console.log(st)
    let labels = []
    let datas = []
    console.log(props.type)
    const { usStats, isLoading } = useCovidTrackingProject(st);

    if(usStats != null) {
        for(let i = 0; i < props.length; i++) {
            let temp = usStats[i]['date']
            let temp2 = temp.toString()
            temp2 = temp2.slice(4,6) + '/' + temp2.slice(6,8)
            labels.push(temp2)
            datas.push(usStats[i][props.type])
        }
        labels.reverse();
        datas.reverse();
        console.log(datas)
        const data = {
            labels: labels,
            datasets: [
                {
                    label:`Daily Covid ${props.title}`,
                    data: datas,
                    backgroundColor:['rgba(255,206,86,0.2)'],
                    pointBackgroundColor: 'rgba(255,206,86,0.2)',
                    pointBorderColor: 'rgba(255, 206, 86, 0.2)'
                }
            ]
        }
        return <Line data={data} width={100} height={50} options={{ maintainAspectRatio: false }}></Line>
    }
    return <div></div>
}

export default LineChart;