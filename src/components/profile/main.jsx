import React from "react";
import profile from '../../assets/images/profile.png'

function Main() {
    return (
        <div className="padded flex-column center-child gapped">
            <img className="profile-image circular" src={profile} alt="profile" />
            <div className="flex-column profile-details">
                <span><strong>VENDICACION, CHARLES JOSEPH</strong></span>
                <span><b>Software Engineer</b></span>
                <span><i>San Ildefonso, Bulacan, Philippines</i></span>
            </div>
        </div>
    );
}

export default Main;
