import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Socials = () => {
    return (
        <div className="flex justify-center items-center gap-3 text-2xl">
            <a href="https://twitter.com/iLeoCarrasco" className="hover:scale-110 ease-in-out"><FaTwitter /></a>
            <a href="https://www.instagram.com/ileocarrasco/" className="hover:scale-110 ease-in-out"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/leonardo-carrasco-5026b8246/" className="hover:scale-110 ease-in-out"><FaLinkedin /></a>
        </div>
    )
}

export default Socials