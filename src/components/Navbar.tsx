import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const Navbar = () =>{
    
    return(
        <div className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <div className="text-4xl">Ak</div>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/arnav-kawatra-54b9551a6/" target="_blank"><FaLinkedin className="cursor-pointer"/></a>
                <a href="https://github.com/VoiD254" target="_blank"><FaGithub className="cursor-pointer"/></a>
                <a href="https://x.com/arnav_42" target="_blank"><FaSquareXTwitter className="cursor-pointer"/></a>
            </div>
        </div>
    );
}