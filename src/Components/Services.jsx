import React from 'react'
import { CiGlobe } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { BsDatabaseFill } from "react-icons/bs";
import { GrDeploy } from "react-icons/gr";
import { IoIosLink } from "react-icons/io";


function Services() {
  return (
    <div className='flex flex-col items-center justify-center gap-4 pb-20'>
      <h1 className='text-6xl font-bold'>Services</h1>
      <h2 className='text-2xl font-semibold mb-4'>What can I do?</h2>
      <div className='grid grid-cols-3 gap-x-12 gap-y-8'>
        <Card Icon={CiGlobe} name={"Web Development"} text={"From simple landing pages to complex web applications, I can bring your ideas to life using the latest Web technologies."} />
        <Card Icon={FaRegEye} name={"Frontend"} text={"Creating sleek React.js interfaces with Tailwind CSS for a smooth UX. Ensuring responsiveness and pixel-perfect designs."} />
        <Card Icon={FaCode} name={"Backend"} text={"Developing secure and scalable server-side applications with Node.js & Express.js. Implementing authentication & API integrations."} />
        <Card Icon={BsDatabaseFill} name={"Database Management"} text={"Designing and optimizing MongoDB & PostgreSQL databases. Ensuring efficient data storage, security, and retrieval."} />
        <Card Icon={GrDeploy} name={"Deployment"} text={"Using Git & GitHub for collaborative development. Deploying applications on Vercel, Netlify, and AWS with CI/CD integration."} />
        <Card Icon={IoIosLink} name={"API Integration"} text={"Building custom REST APIs and integrating third-party services like Stripe & Firebase. Ensuring smooth data exchange via APIs."} />
      </div>
    </div>
  )
}

export default Services


function Card({ Icon, name, text }) {
  return (
    <div className='border rounded-lg flex flex-col gap-3 px-5 py-4 hover:cursor-pointer hover:-translate-y-2 hover:bg-[#2a004a] hover:shadow-[5px_5px_white] transition duration-300'>
      <div className='flex justify-center items-center gap-2'>
        <span><Icon size={30} /></span>
        <h5 className='text-xl font-semibold'>{name}</h5>
      </div>
      <div>
        <p className='w-64 text-center'>{text}</p>
      </div>
    </div>
  )
}
