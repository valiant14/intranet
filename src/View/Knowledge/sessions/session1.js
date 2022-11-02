import React from "react";
import '../index.scss'
import { Player } from 'video-react';
import S1 from '../../../assets/video/BasicTrainingS1.mp4'
import { Button } from "react-bootstrap";

const KnowledgeBase_s1 = () => {

    return (
        <React.Fragment>
            <div className="video-container">
                <div className="video-content">
                    <div className="video-player">
                        <Player
                            playsInline
                            src={S1}
                            fluid={false} width={750} height={438} autoPlay
                            />
                    </div>
                    <div className="video-txt"></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default KnowledgeBase_s1