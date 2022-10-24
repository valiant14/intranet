import React from "react";
import { Row, Col,Dropdown,NavDropdown  } from 'react-bootstrap';
import { Settings,Smartphone,Link,Briefcase } from 'react-feather';
import './index.scss'

const Navbar = () => {
    return (
        <Row>
            <nav className="global-navs" role="navigation">
                <ul >
                    <li>
                    <p><span><Settings /></span>&nbsp;Settings</p>
                    </li>
                    <li>
                    {/* <a href="Apps"><span><Smartphone/></span>&nbsp;Apps</a> */}
                    <Dropdown>
                    <Dropdown.Toggle className="itemList">
                    <span><Smartphone/></span>&nbsp;Apps
                    </Dropdown.Toggle>
                        <Dropdown.Menu className="itemMenu">
                            <Dropdown.Item href="https://sedergroup.operations.dynamics.com" target="_blank">D365</Dropdown.Item>
                            <Dropdown.Item href="https://usnconeboxax1aos.cloud.onebox.dynamics.com" target="_blank">UAT1</Dropdown.Item>
                            <Dropdown.Item href="https://outlook.office.com/mail/" target="_blank">Outlook</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </li>
                    <li>
                    <p><span><Link/></span>&nbsp;My links</p>
                    </li>
                    <li>
                    <p><span><Briefcase/></span>&nbsp;WorkSpaces</p>
                    </li>
                </ul>
                </nav>
        </Row>
    )
}

export default Navbar