import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React, { Suspense } from "react"
import { Container, Navbar } from "react-bootstrap"
import { Escudo } from "../components/Logo3D/Escudo_universae"

const NavigationBar = () => {
    return (
        <Navbar>
            <Container className="container__logo">
                <Navbar.Brand href="/">
                    <div style={{ width: "140px", height: "115px" }}>
                        <Canvas camera={{ zoom: "35", position: [0, 100, 0] }}>
                            <ambientLight intensity={3} />
                            <Suspense fallback={null}>
                                <Escudo />
                            </Suspense>
                            {/* <OrbitControls /> */}
                        </Canvas>
                    </div>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavigationBar
