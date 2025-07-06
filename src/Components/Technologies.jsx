import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { TbApi } from "react-icons/tb";



function Technologies() {
    return (
        <div className='flex flex-col items-center justify-center gap-12 py-20 mb-2'>
            <h1 className='font-bold text-6xl'>Skills</h1>
            {/* <div className='grid grid-cols-4 gap-x-12 gap-y-9'>
                <TechCard Icon={FaReact} textColor={'text-blue-400'} name={"React"} />
                <TechCard Icon={FaNodeJs} textColor={'text-green-600'} name={"NodeJS"} />
                <TechCard Icon={FaHtml5} textColor={'text-orange-600'} name={"HTML"} />
                <TechCard Icon={FaCss3Alt} textColor={'text-blue-600'} name={"CSS"} />
                <TechCard Icon={BiLogoPostgresql} textColor={'text-gray-400'} name={"Postgress"} />
                <TechCard Icon={SiMongodb} textColor={'text-green-500'} name={"Mongodb"} />
                <TechCard Icon={IoLogoJavascript} textColor={'text-yellow-400'} name={"Javascript"} />
                <TechCard Icon={VscVscode} textColor={'text-blue-500'} name={"Vs Code"} />
                <TechCard Icon={FaGithub} textColor={'text-white'} name={"Github"} />
                <TechCard Icon={FaGitAlt} textColor={'text-red-600'} name={"Git"} />
            </div> */}
            <div className='grid grid-row-3 gap-y-9'>
                <div>
                    <h2 className='font-semibold text-xl mb-6'>Front-End</h2>
                    <div className='grid grid-cols-5 gap-x-12'>
                        <TechCard Icon={FaReact} textColor={'text-blue-400'} name={"React"} />
                        <TechCard Icon={IoLogoJavascript} textColor={'text-yellow-400'} name={"Javascript"} />
                        <TechCard Icon={RiTailwindCssFill} textColor={'text-blue-300'} name={"Tailwind"} />
                        <TechCard Icon={FaHtml5} textColor={'text-orange-600'} name={"HTML"} />
                        <TechCard Icon={FaCss3Alt} textColor={'text-blue-600'} name={"CSS"} />
                    </div>
                </div>
                <div>
                    <h2 className='font-semibold text-xl mb-6 '>Back-End & Database</h2>
                    <div className='grid grid-cols-4 gap-x-12 w-fit'>
                        <TechCard Icon={FaNodeJs} textColor={'text-green-600'} name={"NodeJS"} />
                        <TechCard Icon={SiExpress} textColor={'text-gray-500'} name={"Express"} />
                        <TechCard Icon={SiMongodb} textColor={'text-green-500'} name={"Mongodb"} />
                        <TechCard Icon={TbApi} textColor={'text-zinc-400'} name={"Rest Api"} />
                    </div>
                </div>
                <div>
                    <h2 className='font-semibold text-xl mb-6'>Tools</h2>
                    <div className='grid grid-cols-4 gap-x-12 w-fit'>
                        <TechCard Icon={VscVscode} textColor={'text-blue-500'} name={"Vs Code"} />
                        <TechCard Icon={FaGithub} textColor={'text-white'} name={"Github"} />
                        <TechCard Icon={FaGitAlt} textColor={'text-red-600'} name={"Git"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies



function TechCard({ Icon, textColor, name }) {
    return (
        <span className='rounded-lg px-10 py-4 bg-white/15 flex flex-col items-center justify-center hover:scale-110 hover:cursor-pointer hover:shadow-[5px_5px_white]  transition duration-300'>
            <Icon size={70} className={textColor} />
            <h5 className='text-2xl font-semibold mt-2'>{name}</h5>
        </span>
    )
}