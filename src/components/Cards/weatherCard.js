import React from "react";
import './weatherCard.scss'

const Weather = ({data}) => {
    console.log(data
        )
    return (
        <div class="widget">
            <div class="details">
            <div class="temperature">{data.current.temp_c}°</div>
            <div class="summary">
                <p class="summaryText">{data.current.condition.text}</p>
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