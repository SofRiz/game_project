import React from "react"
import { Container, Navbar } from "react-bootstrap"
import logo from "../assets/Logo-Color.ico"

const NavigationBar = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Logo Universae"
                    />
                    <img src="" alt="" />
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavigationBar
