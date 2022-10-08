import React from "react";
import videos from '../../assets/banner-video.mp4'

const Welcome = () => {
    return (
        <>
        <div id="Container">
            <video autoplay>
                <source src={videos} type="video/mp4"></source>
            </video>
            <h4 class="display-6">Welcome to our digital headquarter</h4>
            <p class="lead">We are ready to help you get through your working day with ease.</p>
        </div>
        
        </>
    )
}

export default Welcome