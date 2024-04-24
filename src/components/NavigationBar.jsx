import React from "react"
import { Container, Navbar } from "react-bootstrap"
import logo from "../assets/Logo-Color.ico"

const NavigationBar = () => {
    return (
        <Navbar>
            <Container className="container__logo">
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        className="d-inline-block align-top logo"
                        alt="Logo Universae"
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavigationBar
