import React from "react";
import { Row, Col,Dropdown,NavDropdown  } from 'react-bootstrap';
import { Settings,Smartphone,Link,Briefcase } from 'react-feather';
const Navbar = () => {
    return (
        <Row>
            <nav id="global-nav" class="global-nav" role="navigation">
                <ul >
                    <li>
                    <a href="Settings"><span><Settings /></span>&nbsp;Settings</a>
                    </li>
                    <li>
                    <a href="Apps"><span><Smartphone/></span>&nbsp;Apps</a>
                    </li>
                    <li>
                    <a href="Mylinks"><span><Link/></span>&nbsp;My links</a>
                    </li>
                    <li>
                    <a aria-current="page" href="WorkSpaces"><span><Briefcase/></span>&nbsp;WorkSpaces</a>
                    </li>
                </ul>
                </nav>
        </Row>
    )
}

export default Navbar