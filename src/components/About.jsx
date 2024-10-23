import React from 'react'
import { IoMdDownload } from "react-icons/io";

const About = () => {
    return (
        <>
            <div className='bg-white p-5 flex flex-col items-center justify-center'>
                <div className='h-[60px] border-l-[4px] mt-[10px] border-[#adacac]'></div>
                <h1 className='text-[#2e27a8] text-[32px] p-[10px] text-center font-bold'>About us</h1>
                <p className='p-[30px] text-[22px] ml-[10%] mr-[10%]'>Devoic is dedicated to mentorship 
                    and training in technology, design, AI, and professional development. We aim to equip
                    our community members with the skills to build robust portfolios and strong social 
                    profiles, enhancing their prospects for internships, jobs, and freelance opportunities. 
                    Join us as we foster a supportive environment where creativity and innovation thrive, 
                    enabling every member to unlock their full potential.</p>
                <button className='border-[3px] rounded-md text-[#2e27a8] border-[#2e27a8]
                 p-1 pl-2 pr-2 text-[22px] m-3 hover:border-[black] hover:text-[black]'><IoMdDownload className='inline'/> Brochure</button>
            </div>
        </>
    )
}

export default About