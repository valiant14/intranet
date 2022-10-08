import React,{useState} from "react";
import {Link } from "react-router-dom";
import './index.scss'


const StaffEssentials = ({data}) => {
    const [contextData, setContextData] = useState([])


    return(
        <React.Fragment>
        <hr></hr>
                <div className="menu">
                    <ul>
                        {data.map((item,index) => {
                            return (
                                <li key={index}>
                                    <a onClick={() => setContextData(item.Content)}>{item.Subject}</a>
                                </li>
                            );
                            })}
                    </ul>
                </div>
                <div className="content-menu">
                    <div className="file-explorer">
                        <ul>
                            <li><a>File</a></li>
                            <li><a>View</a></li>
                            <li><a>Sort</a></li>
                            <li><a>Share</a></li>
                        </ul>
                            {/* <div className="form">
                                <i className="fa fa-search"></i>
                                <input type="text" className="form-control form-input" placeholder="Search anything..."></input>
                                <span className="left-pan"><i className="fa fa-microphone"></i></span>
                            </div> */}
                    </div>

                    <h1>{contextData}</h1>
                </div>
        </React.Fragment>
    )

}


export default StaffEssentials;