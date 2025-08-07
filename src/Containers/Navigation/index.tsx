import { Link } from "react-router-dom"
import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import { images } from "../../Types/images";
import NavCard from "../../Components/navCard/NavCard";
import { NavCardData } from "../../Components/navCard/NavCard";
interface Props{
  className?:string
}


function NavLinks({className}:Props) {
  const [toggleChevron1, setToggleChevron1] = useState(true)
  const [toggleChevron, setToggleChevron] = useState(true)
  const [showNav, setShowNav] = useState(false)
  
  return (
    <div className={className}>
      {/* { Navigation Links } */}
      <div className="flex justify-between px-2">
        <div className="max-w-[100px] md:max-w-[150px]">
          <img src={images.logo} alt="Logo" />
        </div>
        <ul className="hidden md:flex items-center gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li onClick={() => (setToggleChevron1(!toggleChevron1))}  className="flex items-center gap-x-2 cursor-pointer">{/* Logic to  toggle Chevron icon */}
            <p>Products</p>
            { toggleChevron1?<FaChevronDown/> :<FaChevronUp/>}
            {!toggleChevron1 && 
            <div className="md:absolute w-full top-20 left-0 bg-white flex justify-center shadow-xl">
              <NavCard items={NavCardData} className="animate-slide_down"/>{/* cards for products  */}
            </div>}
          </li>

          <li onClick={() => (setToggleChevron(!toggleChevron))} className="flex items-center gap-x-2 cursor-pointer">
              <p>Expertise</p>
            { toggleChevron?<FaChevronDown/> :<FaChevronUp/>}
          </li>
        
          <li>
            <Link to="/internship">Internship</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        {  // logic to display navigation bar on smaller devices
          !showNav
          ?
          <MdOutlineMenu onClick={()=> setShowNav(true)} size={30} className="md:hidden"/>
          :
          <div className="bg-white absolute w-[90%] top-2 right-2 rounded-2xl h-[50vh] shadow-xl inset-shadow-sm md:hidden">
            <ul className="pt-[2rem] pl-10 block flex flex-col items-start gap-5  md:hidden ">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li onClick={() => (setToggleChevron1(!toggleChevron1))}  className="flex items-center gap-x-2 cursor-pointer">{/* Logic to  toggle Chevron icon */}
                <p>Products</p>
                { toggleChevron1?<FaChevronDown/> :<FaChevronUp/>}
                {!toggleChevron1 && 
                <div className="absolute bg-white w-[100%] top-0 right-0 rounded-xl right-2 shadow-xl inset-shadow-sm md:hidden z-40 flex justify-center">
                  <NavCard items={NavCardData} className="animate-slide_down"/>{/* link cards for products & logic to close drop down tab  */}
                  <IoCloseCircleOutline size={30} className=" absolute top-1 right-1 text-secondary md:hidden "/>
                </div>}
              </li>

              <li onClick={() => (setToggleChevron(!toggleChevron))} className="flex items-center gap-x-2 cursor-pointer">
                  <p>Expertise</p>
                { toggleChevron?<FaChevronDown/> :<FaChevronUp/>}
              </li>
            
              <li>
                <Link to="/internship">Internship</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
            <IoCloseCircleOutline onClick={()=> setShowNav(false)} size={30} className="md:hidden absolute top-1 right-1 text-secondary" />
          </div>
        }
        
      </div>
    </div>
  )
}

export default NavLinks
