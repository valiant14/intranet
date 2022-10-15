import React from "react";
import './weatherCard.scss'

const Weather = ({data}) => {
    
    return (
        <>
        {data.map(item => {
            console.log(item)
            return (
                <div class="widget">
                <div class="details">
                <div class="temperature">{item.avgtemp_c}°</div>
                <div class="summary">
                    <p class="summaryText">{item.condition.text}</p>
                </div>
                <div class="precipitation">Precipitation: {item.daily_will_it_rain}%</div>
                <div class="wind">Wind: {item.maxwind_mph} mph</div>
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
        })}
        </>
    )
}
export default Weather