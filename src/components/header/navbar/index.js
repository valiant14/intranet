import React from "react";

const Navbar = () => {
    return (
        <nav id="global-nav" class="global-nav" role="navigation">
        <ul class="nav justify-content-end">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="WorkSpaces">WorkSpaces</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="Mylinks">My links</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="Apps">Apps</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="Settings">Settings</a>
            </li>
        </ul>
        </nav>
    )
}

export default Navbar