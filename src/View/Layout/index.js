import React from "react";
import Navbar from '../../components/header/navbar/index'
import Navigations from '../../components/header/navigation'
import Welcome from '../../components/welcome/index'

const Layout =() => {
    return (
        <div>
            <Navbar />
            <Navigations />
        </div>
    )
}

export default Layout