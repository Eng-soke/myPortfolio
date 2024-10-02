import { useState } from "react"
import { Link } from "react-router-dom"
function Header() {

    const [visible, setVisible] = useState(false)

    const handleClick = () => {
        setVisible(true)
    }

    const handlClose = () => {
        setVisible(false)
    }

    return <div className="sm:flex sm:mx-32  relative justify-around  items-center border-b-2 border-gray-900 shadow-2xl rounded-3xl m-5 p-4">
        <Link to="/">
        <h1 className="text-2xl text-[#e26d5c] font-medium"> <span className="text-black">Eng</span>Soke</h1>
        </Link>

        <ul style={{ display: visible == true ? "block" : "" }} className="sm:flex hidden sm:p-0 p-2 gap-5 text-sm font-medium">
            <Link to="/">
                <li className="hover:border-b-2 border-[#e26d5c]">Home</li>
                <hr className="w-[40px] bg-gray-700 h-[1.5px] hover:border-b-2 border-[#e26d5c] border-none hidden" />
            </Link>

            <Link to="/about">
                <li className="hover:border-b-2 border-[#e26d5c]">About Me</li>
                <hr className="w-[65px] bg-gray-700 h-[1.5px]  border-none hidden" />

            </Link>

            <Link to="/myskills">
                <li className="hover:border-b-2 border-[#e26d5c]">My Skills</li>
                <hr className="w-[40px] bg-gray-700 h-[1.5px] hover:border-b-2 border-[#e26d5c] border-none hidden" />
            </Link>

            <Link to="/services">
                <li className="hover:border-b-2 border-[#e26d5c]">Services</li>
                <hr className="w-[65px] bg-gray-700 h-[1.5px] hover:border-b-2 border-[#e26d5c] border-none hidden" />
            </Link>

            

        </ul>

        <div className="">
            <div className="absolute sm:hidden top-5 right-4 flex gap-6 items-center">
                <div> 
              <i style={{ display: visible == true ? "none" : "block" }} onClick={handleClick} class="  text-2xl fa-solid fa-bars"></i>
                <i style={{ display: visible == true ? "block" : "none" }} onClick={handlClose} class=" hidden text-2xl fa-solid fa-circle-xmark"></i>
                </div>
            </div>

        </div>


    </div>
}
export default Header 