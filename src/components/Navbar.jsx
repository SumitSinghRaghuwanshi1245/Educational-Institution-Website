import React,{useState} from 'react'
import { TbInfoTriangle } from "react-icons/tb";
import { FaBookReader } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { MdCall } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {

    const links = [
        {
            icon: <FaHome />,
            name: "Home"
        },
        {
            icon: <TbInfoTriangle />,
            name: "About us"
        },
        {
            icon: <FaBookReader />,
            name: "Courses Offered"
        },
        {
            icon: <GrServices />,
            name: "Services"
        },
        {
            icon: <MdCall />,
            name: "Contact us"
        }
      ]

  return (
    <>
        <header className='p-[15px] bg-transparent'>
            <div className='max-w-[1200px] mx-auto flex items-center'>
                <div className='w-[100px]'>
                    <img src="https://creatorspace.imgix.net/users/clkquv25y00eosr01lf6cofsx/CFirtF40VoYtVNEI-Group%252023.png?w=300&h=300" className='w-[60px] rounded-xl' alt='' />
                </div>
                <div>
                </div>
                <div className='flex list-none gap-5 ml-auto text-[16px] font-semibold text-[white] menu-links'>
                    { 
                        links.map(
                            (link, index) => {
                                return <li key={index} className='cursor-pointer flex items-center gap-2 hover:text-[#2f3387]'>
                                    {link.icon}
                                    {link.name}
                                </li>
                            }
                        )
                    }
                </div>
                <div className='menu text-[white] font-semibold cursor-pointer flex items-center p-3 gap-2 hover:bg-[#00000038]'>
                    MENU
                    <CiMenuFries />
                </div>
            </div>
        </header>
    </>
  )
}

export default Navbar