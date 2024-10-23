import React,{useState} from 'react'
import {FaArrowRight, FaArrowLeft} from "react-icons/fa6";

const Courses = () => {

  const [rest, setRest] = useState(0);
  const getThresholds = () => {
    const width = window.innerWidth;
    if (width <= 480) {
        return -4.5;
    } else if (width <= 768) { 
        return -4;
    } else if (width <= 1024) {
        return -3;
    } else {
        return -3.2;
    }
};

const nextRest = () => {
    const threshold = getThresholds();
    if (rest <= threshold) {
        setRest(0);
    } else {
        setRest(rest - 0.8);
    }
};

const prevRest = () => {
    if (rest >= 0) {
        setRest(-3.2);
    } else {
        setRest(rest + 0.8);
    }
};

    const departments = [
      {
        name: "Web Development",
        banner: "https://wayspire.in/wp-content/uploads/2022/11/web-development.jpg",
        para: "The Web Development department focuses on creating dynamic and interactive web applications. Students learn various programming languages, frameworks, and best practices to build user-friendly websites."
      },
      {
        name: "DSA",
        banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRA2mucQpskt8bTnQtInuErFZd38C1AHSkhQ&s",
        para: "The Data Structures and Algorithms (DSA) department delves into the core principles of computer science. Students develop problem-solving skills and learn to optimize code through various data structures and algorithms."
      },
      {
        name: "UI Design",
        banner: "https://uid.edu.in/wp-content/uploads/2024/07/Whats-the-Difference-Between-Interaction-Design-and-Visual-Design-UI.jpg",
        para: "The UI Design department emphasizes creating intuitive and visually appealing user interfaces. Students explore design principles, prototyping, and tools to enhance user experiences across digital platforms."
      },
      {
        name: "Graphic Design",
        banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREJyqTDZF5Rl2xPbXKhxeVIeOtdENL4j2iyg&s",
        para: "The Graphic Design department is dedicated to visual communication. Students learn about color theory, typography, and composition, enabling them to create stunning visuals for print and digital media."
      },
      {
        name: "Public Relations",
        banner: "https://i0.wp.com/crenshawcomm.com/wp-content/uploads/2011/03/News_PR.jpg?fit=640%2C261&ssl=1",
        para: "The Public Relations department focuses on building and managing the reputation of organizations. Students learn communication strategies, media relations, and event management to effectively promote and maintain public image."
      },
      {
        name: "Finance",
        banner: "https://happay.com/blog/wp-content/uploads/sites/12/2023/11/corporate-finance-1140x665.webp",
        para: "The Finance department prepares students for careers in financial analysis, investment management, and corporate finance. Students gain knowledge in financial markets, risk management, and economic principles."
      },
    ];    

  return (
    <>
      <div
        className='h-[120%] bg-cover bg-no-repeat bg-fixed'
        style={{
          backgroundImage: 'url(https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-56228.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1729555200&semt=ais_hybrid)',
          margin: 0,
          padding: 0,
        }}
      >
        <h1 className='text-[white] text-[36px] text-center p-[50px] font-bold'>DEPARTMENTS</h1>
        <div className='flex justify-center items-center'>
          <div onClick={prevRest} className='flex cursor-pointer justify-center items-center w-[30px] h-[30px] 
          bg-[#adacac] hover:bg-[#e2e2e7] rounded-full mx-2'><FaArrowLeft /></div>

        <div className='flex overflow-hidden gap-5 mt-[32px] mb-[64px] w-[80vw]'>
          {
            departments.map(
              (cat, index) => {
                return <div key={index} style={{ transform: `translateX(${rest * 100}%)`}}  className='bg-white rounded-md w-[320px] h-[420] object-cover shrink-0 cursor-pointer duration-500 hover:bg-[#adacac]'>
                          <img src={cat.banner} className='w-[320px] h-[220px] p-[10px] hover:p-0' alt=''/>
                          <h1 className='text-[22px] text-center font-bold'>{cat.name}</h1>
                          <p className='p-[10px] text-[14px] ml-[10%] mr-[10%] h-[160px]'>{cat.para}</p>
                          <button className='border-[3px] rounded-md ml-[32%] p-1 pl-2 pr-2 text-[16px] m-3 hover:border-[#2e27a8] hover:text-[#2e27a8]'>See More</button>
                        </div>
              }
            )
          }
        </div>

          <div onClick={nextRest} className='flex cursor-pointer justify-center items-center w-[30px] h-[30px] 
          bg-[#adacac] hover:bg-[#e2e2e7] rounded-full mx-2'><FaArrowRight /></div>
        </div>
      </div>
    </>
  );
};

export default Courses;
