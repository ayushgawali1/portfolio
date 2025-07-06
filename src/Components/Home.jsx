import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { RiDownload2Line } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";


function Home() {
  return (
    <div className='flex flex-col justify-center items-center mt-4 gap-4 py-2'>
      <img
        className='h-40 w-40'
        src="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png"
        alt=""
      />
      <h2 className='text-2xl'>Hi I am Ayush Gawali</h2>
      <h3 className='text-5xl font-semibold'>Full-Stack Web Developer</h3>
      <p className='text-lg w-1/2 items-center'>I am a FullStack web developer with a passion for building things.
        I love to learn new things and I am always looking for new challenges.
      </p>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-6 items-center justify-center'>
          <a href="https://github.com/ayushgawali1"  target="_blank" rel="noopener noreferrer" className='p-2 rounded-lg border hover:bg-[#2a004a] hover:bg-white/15 hover:scale-110 transition duration-300'>
            <FiGithub size={24} />
          </a>
          <a href="https://github.com/ayushgawali1"  target="_blank" rel="noopener noreferrer" className='p-2 rounded-lg border hover:bg-[#2a004a] hover:bg-white/15 hover:scale-110 transition duration-300'>
            <RiLinkedinLine size={24} />
          </a>
          <a href="https://github.com/ayushgawali1"  target="_blank" rel="noopener noreferrer" className='text-yellow-500 p-2 rounded-lg border hover:bg-[#2a004a] hover:bg-white/15 hover:scale-110 transition duration-300'>
            <img src="https://portfolio-website-orpin-nine-12.vercel.app/leetcode.png" alt="" />
          </a>
          <a href="https://github.com/ayushgawali1"  target="_blank" rel="noopener noreferrer" className='text-green-500 p-2 rounded-lg border hover:bg-[#2a004a] hover:bg-white/15 hover:scale-110 transition duration-300'>
            <SiGeeksforgeeks size={24} />
          </a>
        </div>
        <div className='flex items-center justify-center gap-6'>
          <button className='px-6 py-2 border-2 border-white rounded-full flex items-center justify-center gap-2'>
            <p className='ps-1'>Contact Me</p>
            <FaArrowRight />
          </button>
          <button className='bg-white text-black px-6 py-2 border-2 border-white rounded-full flex items-center justify-center gap-2'>
            My Resume
            <RiDownload2Line />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home