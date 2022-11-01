import React from "react";
import { Button } from "react-bootstrap";

const ProfileCard = () => {
    return (
        <React.Fragment>
            <div className="Profile-container">
                <div className="Profile-image-container">
                    <div className="Profile-image"></div>
                </div>
                <div className="Profile-Name">Valiant F. Ocampo</div>
                <div className="Profile-Position">IT Support</div>
                <div className="Profile-Btn">
                    <Button>Message</Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProfileCard