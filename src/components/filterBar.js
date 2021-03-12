/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const filterBar = css`
    border: 3px solid grey;
    height: 25vw;
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

function changeFunc() {
    
}

function FilterBar() {
    return(
        <>
            <form css={filterBar}>
                <select id="states" name="states" css={dropDown}>
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
                        <input type="radio" id="cases" name="drone" value="cases"></input>
                        <label for="cases">Cases</label>
                    </div>

                    <div css={radio}>
                        <input type="radio" id="deaths" name="drone" value="deaths"></input>
                        <label for="deaths">Deaths</label>
                    </div>

                    <div css={radio}>
                        <input type="radio" id="hospitalizations" name="drone" value="hospitalizations"></input>
                        <label for="hospitalizations">Hospitalizations</label>
                    </div>
                </div>
            </form>

        </>
    )
}

export default FilterBar;
