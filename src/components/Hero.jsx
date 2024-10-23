import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const links = [
    {
        icon: <FaInstagram size={22} className='text-[white] m-3 hover:text-[#14343f]' />,
    },
    {
        icon: <FaLinkedin size={22} className='text-[white] m-3 hover:text-[#14343f]' />,
    },
    {
        icon: <FaSquareXTwitter size={22} className='text-[white] m-3 hover:text-[#14343f]'  />,
    },
    {
        icon: <FaGithub size={22} className='text-[white] m-3 hover:text-[#14343f]'  />,
    }
];

const Hero = () => {
  return (
    <>
        <div className=''>
            <div className='flex justify-center items-center h-[36vh]'>
                <div className='text-center'>
                    <h1 className='text-[#6fceee] text-[64px] font-bold'>Devoic</h1>
                    <h5 className='font-semibold text-[#2e27a8] text-[32px]'><span className='text-[white]'>Build A Strong</span> Proof of Work</h5>
                    <button className='border-[3px] text-[white] border-[white] p-1 pl-2 pr-2 text-[22px] m-3 hover:border-[#14343f] hover:text-[#14343f]'>Explore</button>
                </div>
            </div>
            <div className='flex justify-between items-center w-full mb-[32px]'>
            <div className='flex flex-col items-center'>
                <div className='h-[50px] border-l-[3px] border-[#adacac] ml-3'></div>
                <ul className='flex flex-col'>
                    {
                        links.map((link, index) => (
                            <li key={index} className='cursor-pointer flex items-center ml-3 gap-2 hover:text-[#6fceee] hover:rotate-12'>
                                {link.icon}
                            </li>
                        ))
                    }
                </ul>
            </div>
                <div className='text-[#adacac] rotate-90 font-semibold text-[22px] bounce-animation'>Scroll Down <FaArrowRightLong className='inline' /></div>
            </div>
        </div>
    </>
  )
}

export default Hero