import { BsTwitterX } from "react-icons/bs"
import {
    FaFacebook,
    FaGoogle,
    FaInstagram,
    FaLinkedin,
    FaTiktok,
    FaTwitch,
    FaYoutube,
} from "react-icons/fa6"
import "./Footer.css"

function Footer() {
    return (
        <section className="footer">
            <div className="iconos">
                <a href="https://www.facebook.com/UNIVERSAE/">
                    <FaFacebook className="a1" />
                </a>
                <a href="https://www.instagram.com/_universae/?hl=es">
                    <FaInstagram className="a2" />
                </a>
                <a href="https://www.youtube.com/c/UNIVERSAE_FP">
                    {" "}
                    <FaYoutube className="a3" />
                </a>
                <a href="https://www.twitch.tv/universae_fp">
                    <FaTwitch className="a4" />
                </a>
                <a href="https://www.linkedin.com/school/universae">
                    <FaLinkedin className="a5" />
                </a>
                <a href="https://www.tiktok.com/@_universae">
                    <FaTiktok className="a6" />
                </a>
                <a href="https://twitter.com/_Universae">
                    <BsTwitterX className="a7" />
                </a>
                <a href="https://universae.com">
                    <FaGoogle className="a8" />
                </a>
            </div>
        </section>
    )
}

export default Footer
