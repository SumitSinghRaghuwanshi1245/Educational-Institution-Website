import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const company = [
    "About Us",
    "Departments",
    "Team",
    "Events",
    "Testimonials"
];

const contact = [
    "Write a Message",
    "Partner with us"
];

const legal = [
    "Terms & Conditions",
    "Privacy Policy"
];

const life = [
    "Explore with Devoic",
    "Devoic News"
];

const Footer = () => {
  return (
    <>
        <div className='bg-white mt-7'>
        <div className="flex flex-col md:flex-row gap-5 pb-5 mx-5 border-b border-black">
            <div className="mt-3 flex flex-col items-center md:items-start">
                <img 
                    src='https://creatorspace.imgix.net/users/clkquv25y00eosr01lf6cofsx/CFirtF40VoYtVNEI-Group%252023.png?w=200&h=200' 
                    alt='Devoic Logo' 
                    className='w-20 h-20 md:w-24 md:h-24'
                />
                <h1 className='text-[#2e27a8] text-3xl md:text-5xl font-bold'>Devoic</h1>
                <h5 className='font-semibold text-[#2e27a8] text-base'>
                    <span className='text-[#16165a]'>Build A Strong</span> Proof of Work
                </h5>
            </div>
            
            <div className="flex-1 mt-3">
                <h2 className='font-bold text-lg'>Company</h2>
                {company.map((com, index) => (
                    <p key={index} className='text-[#7b7b7b] hover:cursor-pointer font-semibold pt-2'>{com}</p>
                ))}
                <h2 className='font-bold text-lg mt-4'>Legal</h2>
                {legal.map((com, index) => (
                    <p key={index} className='text-[#7b7b7b] hover:cursor-pointer font-semibold pt-2'>{com}</p>
                ))}
            </div>

            <div className="flex-1 mt-3">
                <h2 className='font-bold text-lg'>Contact us</h2>
                {contact.map((com, index) => (
                    <p key={index} className='text-[#7b7b7b] font-semibold hover:cursor-pointer pt-2'>{com}</p>
                ))}
                <h2 className='font-bold text-lg mt-6'>Life at Devoic</h2>
                {life.map((com, index) => (
                    <p key={index} className='text-[#7b7b7b] font-semibold hover:cursor-pointer pt-2'>{com}</p>
                ))}
                <h2 className='font-bold text-lg mt-6'>Social</h2>
                <div className='flex gap-2 pt-5'>
                    <FaLinkedin size={30} />
                    <FaInstagram size={30} />
                    <FaSquareXTwitter size={30} />
                    <FaFacebookF size={30} />
                    <FaPinterest size={30} />
                </div>
            </div>

            <div className='flex-1 mt-3 text-[#7b7b7b]'>
                <h2 className='font-bold text-lg text-black'>Our Location</h2>
                <p className='text-sm'><strong>Address:</strong> UIT RGPV, Bhopal, M.P. 462023</p>
                <p className='text-sm'><strong>Phone:</strong> 0755 420 1921</p>
                <p className='text-sm'><strong>Email:</strong> thedevoic.rgpv@gmail.com</p>
                <div className="mt-8">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3981.6652036575856!2d77.36158884929672!3d23.308927584571965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1726556441205!5m2!1sen!2sin"
                    className='w-full md:w-2/3 lg:w-3/4 h-[40vh] rounded-md'
                    title='Google Maps'
                    loading="lazy"
                ></iframe>
                </div>
            </div>
        </div>
        <div className='bg-[#2e27a8] p-1'>
            <p className='font-semibold text-white text-center text-sm'>All Rights Reserved ©2024 TechTitans<sup>®</sup></p>
        </div>
    </div>
    </>
  )
}

export default Footer