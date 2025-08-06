import { Link } from "react-router-dom"
import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { images } from "../../Types/images";
import NavCard from "../../Components/navCard/NavCard";
import { NavCardData } from "../../Components/navCard/NavCard";
interface Props{
  className?:string
}


function NavLinks({className}:Props) {
  const [toggleChevron1, setToggleChevron1] = useState(true)
  const [toggleChevron, setToggleChevron] = useState(true)
  return (
    <div className={className}>
      <div className="flex justify-between">
        <div className="w-[150px]">
          <img src={images.logo} alt="Logo" />
        </div>
        <ul className="flex items-center gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li onMouseDown={() => (setToggleChevron1(!toggleChevron1))}  className="flex items-center gap-x-2">{/* Logic to  toggle Chevron icon */}
              <p>Products</p>
            { toggleChevron1?<FaChevronDown/> :<FaChevronUp/>}
            {!toggleChevron1 && 
            <div className="absolute w-full top-20 left-0 bg-white flex justify-center shadow-xl">
              <NavCard items={NavCardData} className="animate-slide_down"/>
            </div>}
          </li>

          <li onMouseDown={() => (setToggleChevron(!toggleChevron))} className="flex items-center gap-x-2">
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
      </div>
    </div>
  )
}

export default NavLinks
