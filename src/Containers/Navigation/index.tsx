import React from 'react'
import { FaChevronDown } from "react-icons/fa6";
import type { NavItems } from '../../Types/navTypes';
import { Link } from 'react-router-dom';

export interface NavData{
   items:NavItems[]
   clasName?:string;
}


function Navbar({items,clasName}:NavData) {
  return (
    <div className='flex justify-between'>
      <img src="" alt="Logo" />
      <div>
         <ul className='flex gap-10'>
        {
          items.map((item)=>(
              <li className='flex items-center'>
                <Link to={item.path} className={clasName}>{item.title}</Link>
                <div>{item.icon}</div>
              </li>
          ))
        }
          </ul>
      </div>
    </div>
  )
}

export default Navbar
