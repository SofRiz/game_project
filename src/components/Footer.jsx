import "../footer.css";   // Path: Footer.jsx
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitch } from "react-icons/fa6";
import { FaLinkedi } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";


function Footer() {

    return (
        <section className="footer">
            <div class="iconos">
                <a href="https://www.facebook.com/UNIVERSAE/"><FaFacebook /></a>
                <a href="https://www.instagram.com/_universae/?hl=es"><FaInstagram /></a>
                <a href="https://www.youtube.com/c/UNIVERSAE_FP"   > <FaYoutube /></a>
                <a href="https://www.twitch.tv/universae_fp"><FaTwitch /></a>
                <a href="https://www.linkedin.com/school/universae"><FaLinkedi /></a>
                <a href="https://twitter.com/_Universae"><FaTwitter /></a>
                <a href="https://universae.com"><FaGoogle /></a>
            </div>
        </section>
    )

}

export default Footer;