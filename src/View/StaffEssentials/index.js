import React from "react";
// import {db} from '../../firebase/firebase'
// import { Button } from "react-bootstrap";
// import auth from '../../firebase/firebase'

const StaffEssentials = ({data}) => {

    return(
        <React.Fragment>
        <hr></hr>
        {data.map((item,index) => {
            console.log(item.Content)
            return (
                <div key={index}>
                    {item.Content}
                </div>
            )
        })}
        </React.Fragment>
    )

}


export default StaffEssentials;