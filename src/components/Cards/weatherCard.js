import React from "react";
import './weatherCard.scss'

const Weather = () => {
    return (
        <div class="widget">
            <div class="details">
            <div class="temperature">20°</div>
            <div class="summary">
                <p class="summaryText">Mostly Cloudy</p>
            </div>
            <div class="precipitation">Precipitation: 20%</div>
            <div class="wind">Wind: 3 mph</div>
            </div>
            <div class="pictoBackdrop"></div>
            <div class="pictoFrame"></div>
            <div class="pictoCloudBig"></div>
            <div class="pictoCloudFill"></div>
            <div class="pictoCloudSmall"></div>
            <div class="iconCloudBig"></div>
            <div class="iconCloudFill"></div>
            <div class="iconCloudSmall"></div>
        </div>
    )
}
export default Weather