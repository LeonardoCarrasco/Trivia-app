import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Socials = () => {
    return (
        <div className="flex justify-center items-center gap-3 text-2xl">
            <a href="" className="hover:scale-110 ease-in-out"><FaTwitter /></a>
            <a href="" className="hover:scale-110 ease-in-out"><FaInstagram /></a>
            <a href="" className="hover:scale-110 ease-in-out"><FaLinkedin /></a>
        </div>
    )
}

export default Socials