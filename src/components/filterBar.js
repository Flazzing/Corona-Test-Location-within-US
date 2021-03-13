/** @jsxImportSource @emotion/react */
import React, {useState} from "react";
import { css } from "@emotion/react";
import { Switch, Route, Redirect, Link, withRouter, useHistory} from "react-router-dom";

const filterBar = css`
    border: 3px solid grey;
    height: 20vw;
    width: 10%;
    display: inline-block;
    margin: 1%;
    background-color: #f7f7f7;
    vertical-align: top;
`

const dropDown = css`
    width: 75%;
    margin: auto;
    align: center;
    border: 2px solid grey;
    border-radius: 3px; 
    display: block;
    margin-top: 5px;
`
const radioHolder = css`
    border: 2px solid grey;
    margin: auto;
    margin-top: 30%;
    width: 90%;
    align: center;
`

const radio = css`
    align: center;
    width: 80%;
    margin:auto;
`
const submit = css`
    align: center;
    margin-left: 30%;
    margin-right: 30%;
    width: 40%;
    margin-top: 50%;
    font-size: .8vw;
`
const lab = css`
    font-size: .8vw;
`

function changeFunc(st, dataType, props) {
    console.log(st, dataType)
}

function FilterBar(props) {
    const history = useHistory();
    const [dropdown, setDropdown] = useState("Entire Nation")
    const [radioButton, setButton] = useState("cases")
    return(
        <>
            <form css={filterBar} onSubmit={(e) => {
                    e.preventDefault();
                    if(dropdown != "") {
                        history.replace(`/statistic/us/${dropdown}/${radioButton}`);
                    } else {
                        history.replace(`/statistic/us/${radioButton}`)
                    }
                }}>
                <select value={dropdown} id="states" name="state" css={dropDown} onChange={(e)=>{setDropdown(e.target.value)}}>
                    <option value="">Entire Nation</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>
                <div css={radioHolder}>
                    <div css={radio}>
                        <input onChange={(e)=>{setButton(e.target.value)}} type="radio" id="cases" name="drone" value="cases"></input>
                        <label css={lab} for="cases">Cases</label>
                    </div>

                    <div css={radio}>
                        <input onChange={(e)=>{setButton(e.target.value)}} type="radio" id="deaths" name="drone" value="deaths"></input>
                        <label css={lab} for="deaths">Deaths</label>
                    </div>

                    <div css={radio}>
                        <input onChange={(e)=>{setButton(e.target.value)}} type="radio" id="hospitalizations" name="drone" value="hospitalizations"></input>
                        <label css={lab} for="hospitalizations">Hospitalizations</label>
                    </div>
                </div>
                <input type="submit" value="Submit" css={submit}></input>
            </form>

        </>
    )
}

export default withRouter(FilterBar);
