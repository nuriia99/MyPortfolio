"use client"
import { Poppins, Roboto_Mono } from 'next/font/google'
import {BsFillMoonStarsFill, BsFillSunFill, BsPersonFillGear, BsPhoneFill, BsTelephoneFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub, AiFillFastForward, AiFillMail} from 'react-icons/ai'
import {RiTeamFill} from 'react-icons/ri'
import {MdReportProblem} from 'react-icons/md'
import Image from 'next/image'
import face from '../public/face.png'
import html5 from '../public/html5.svg'
import css from '../public/css.svg'
import js from '../public/js.svg'
import react from '../public/react.svg'
import sass from '../public/sass.svg'
import redux  from '../public/redux.png'
import nextjs  from '../public/nextjs.svg'
import React, { useState, useEffect } from 'react'
import { ProjectCard } from './ProjectCard'

const roboto = Roboto_Mono({ subsets: ['latin'], weight:['400', '700'] })
const poppins = Poppins({ subsets: ['latin'], weight:['400', '700'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [day, setDay] = useState('day')
  

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
    setDay(() => {
      if (day === 'day') return ''
      return 'day'
    })
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry .target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    })
  })

  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.hidden')
    const hiddenElements2 = document.querySelectorAll('.hidden2')
    hiddenElements.forEach((el) => observer.observe(el))
    hiddenElements2.forEach((el) => observer.observe(el))
  }, []);


  return (
    <main className={poppins.className}>
      <div className={darkMode ? 'dark' : ''}>
      <div className='dark:bg-gray-900 color-transition'>
        <section id='presentation' className='color-transition px-10 dark:bg-gray-900'>
          <div className='bg-red-700 dark:bg-white fixed inset-0 h-fit w-full px-10 py-5  bg-opacity-80 z-10 flex justify-center backdrop-blur'>
            <nav className='relative flex items-center justify-between w-full lg:w-70p text-white dark:text-black '>
              <h1 className={roboto.className + ' text-2xl flex'}>{"{dev-nuriia99}"}</h1>
              <ul className='flex items-center md:gap-5'>
                <li><a href='#about-me' className='hover:text-orange-200 dark:hover:text-red-600 transition ease-in-out duration-300 hidden md:inline'>About Me</a></li>
                <li><a href='#skills' className='hover:text-orange-200 dark:hover:text-red-600 transition ease-in-out duration-300 hidden md:inline'>Skills</a></li>
                <li><a href='#projects' className='hover:text-orange-200 dark:hover:text-red-600 transition ease-in-out duration-300 hidden md:inline'>Projects</a></li>
                <li><a href='#contact' className='hover:text-orange-200 dark:hover:text-red-600 transition ease-in-out duration-300 hidden md:inline'>Contact</a></li>
                <li>
                  <button onClick={handleDarkMode} className={darkMode ? 'switch dark' : `switch ${day}`}>
                    <span className='grid place-items-center'><BsFillSunFill className='cursor-pointer text-md text-white'/></span>
                    <span className='grid place-items-center'><BsFillMoonStarsFill className='cursor-pointer text-md text-white'/></span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div className='flex justify-center pt-40'>
            <div className='lg:presentation-container'>
              <div>
                <h2 className='lg:text-left text-center text-5xl font-semibold text-red-700 dark:text-red-500'>Nuria Anton <span className="wave">👋</span></h2>
                <h3 className='lg:text-left text-center text-2xl pt-4 pb-4 text-black dark:text-white'>Front-End React Developer</h3>
                <div>
                  <p className='lg:text-left text-center text-sm leading-8 text-zinc-600 dark:text-zinc-400'>
                    Hi, I'm Nuria. A junior software engineer specialized in Web Development, who lives in Barcelona, Spain 📌.
                  </p>
                </div>
              </div>
                <div className='flex justify-center lg:justify-start  gap-4 text-3xl py-3 pl-0 text-zinc-600 dark:text-zinc-400'>
                  <a target="_blank" className='grid content-center hover:text-sky-700 transition ease-in-out duration-300' href='https://www.linkedin.com/in/nuria-anton/'><AiFillLinkedin/></a>
                  <a target="_blank" className='grid content-center hover:text-gray-900 dark:hover:text-gray-400 transition ease-in-out duration-300' href='https://github.com/nuriia99'><AiFillGithub/></a>
                  <a href='./cv.pdf' target="_blank" className="relative bg-gradient-to-r text-sm from-red-500 to-red-800 hover:from-red-400 hover:to-red-700 text-white px-4 py-2 rounded-md transition ease-in-out duration-300 before-[''] before:absolute before:inset-0 before:w-full before:h-full before:border-2 before:border-transparent before:hover:border-red-700 before:dark:hover:border-white before:hover:top-1 break-after-autohover before:rounded-md  before:hover:left-1 before:-z-10 before:transition-all before:duration-200">Resume</a>
                </div>
              <div className='pt-10'>
                <h5 className='font-semibold text-center lg:text-start hover:text-red-800 transition duration-300'>Programming lenguages:</h5>
                <div className='w-full text-center lg:text-start pb-5'>Java, Javascript, PHP, C++ and C#</div>
                <h5 className='font-semibold text-center lg:text-start hover:text-red-800 transition duration-300'>Web Programming Techs:</h5>
                <div className='w-full text-center lg:text-start pb-5'>HTML, CSS, SASS and React</div>
                <h5 className='font-semibold text-center lg:text-start hover:text-red-800 transition duration-300'>React Techs:</h5>
                <div className='w-full text-center lg:text-start pb-5'>Typescript, Redux, Next</div>
                <h5 className='font-semibold text-center lg:text-start hover:text-red-800 transition duration-300'>Databases:</h5>
                <div className='w-full text-center lg:text-start pb-5'>MYSQL, postgreSQL and MongoDB</div>
                <h5 className='font-semibold text-center lg:text-start hover:text-red-800 transition duration-300'>Version Control Techs:</h5>
                <div className='w-full text-center lg:text-start pb-5'>Git and Github</div>
              </div>
            </div>
          </div>
          
        </section>
        <section id='about-me' className='hidden about-me px-10 dark:bg-gray-900'>
          <div className='lg:about-me-container'>
            <h3 className={roboto.className + ' text-center flex justify-center font-semibold text-3xl text-red-700 dark:text-red-500 pb-5 pt-14'}>01. About me</h3>
            <div className='flex lg:flex-row flex-col items-center gap-5'>
              <div className='flex flex-col justify-center'>
                <p className='leading-7 text-justify pb-5 dark:text-white'>
                  Hello! My name is Nuria and I enjoy creating websites on the internet. My interest in web development started during my degree, where I learnt how fun designing new pages and building my own ideas was. 
                </p>
                <p className='leading-7 text-justify pt-0 dark:text-white'>
                  I've recently finished a <b>software engineering degree</b> at UPC, and I've completed a FullStack Bootcamp to learn more about the most important technologies. At this point, my goal is to keep learning new skills and working on new projects to put in practise all I've learnt.  
                </p>
              </div>
              <div>
                <div className='relative h-60 w-60 flex justify-center min-w-fit overflow-hidden'>
                  <Image className='box face-img' src={face} layout={'fill'} objectFit={'contain'}/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='skills'>
          <div className='about-me hidden2 px-10 dark:bg-gray-900'>
            <div className='lg:about-me-container'>
              <h3 className={roboto.className + ' text-center flex justify-center font-semibold text-3xl text-red-700 dark:text-red-500 pb-5 pt-36'}>02. Soft skills</h3>
              <div className='flex justify-around gap-20 py-20 flex-wrap'>
                <div className='flex flex-col items-center gap-3'>
                  <AiFillFastForward className='text-5xl text-red-800 dark:text-red-500'/>
                  <p className='dark:text-white'>Fast learning</p>
                </div>
                <div className='flex flex-col items-center gap-3 '>
                  <RiTeamFill className='text-5xl text-red-800 dark:text-red-500'/>
                  <p className='dark:text-white'>Team work</p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                  <MdReportProblem className='text-5xl text-red-800 dark:text-red-500'/>
                  <p className='dark:text-white'>Problem solving</p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                  <BsPersonFillGear className='text-5xl text-red-800 dark:text-red-500'/>
                  <p className='dark:text-white'>Adaptabilty</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='projects' className='hidden about-me px-10 dark:bg-gray-900'>
          <div className='lg:about-me-container flex flex-col justify-center items-center'>
            <h3 className={roboto.className + ' text-center flex justify-center font-semibold text-3xl text-red-700 dark:text-red-500 pb-10 pt-10'}>03. Projects</h3>
            <ProjectCard name="appleProject"/>
            <ProjectCard name="tfg"/>
            <ProjectCard name="booking"/>
            <ProjectCard name="easybank"/>
            <ProjectCard name="personaltrainer"/>
          </div>
        </section>
        <section id='contact'>
          <div className='hidden2 about-me px-10 py-20 dark:bg-gray-900'>
            <div className='lg:about-me-container'>
              <h3 className={roboto.className + ' text-center flex justify-center font-semibold text-3xl text-red-700 dark:text-red-500 pb-5'}>04. Contact</h3>
              <h4 className='py-10 text-black font-semibold dark:text-white'>Don't be shy! Contact me! 👇</h4>
              <div className=' flex flex-wrap justify-start lg:justify-center  gap-10 text-3xl py-3 pl-0 text-zinc-600 dark:text-zinc-400'>
                <a target="_blank" href='https://www.linkedin.com/in/nuria-anton/' className='flex items-center gap-4 hover:text-sky-700 hover:dark:text-sky-500 transition ease-in-out duration-300'>
                  <AiFillLinkedin/>
                  <div>
                    <p className='text-lg text-black font-semibold dark:text-white text-left'>LinkedIn</p>
                    <p className='text-sm'>Nuria Antón Calle</p>
                  </div>
                </a>
                <div className='flex items-center gap-4 hover:text-red-700 hover:dark:text-red-500 transition ease-in-out duration-300'>
                  <AiFillMail/>
                  <div>
                    <p className='text-lg text-black font-semibold dark:text-white text-left'>Mail</p>
                    <p className='text-sm'>nurianton1999@gmail.com</p>
                  </div>
                </div>
                <div className='flex items-center gap-4 hover:text-teal-600 hover:dark:text-teal-500 transition ease-in-out duration-300 '>
                  <BsPhoneFill/>
                  <div>
                    <p className='text-lg text-black font-semibold dark:text-white text-left'>Phone</p>
                    <p className='text-sm'>+34 657 314 695</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className='h-20 grid items-center bg-red-700 dark:bg-white '>
          <p className='text-white flex justify-center dark:text-black'>Copyright © 2023. All rights reserved.</p>
        </footer>
      </div>
      </div>
    </main>
  )
}
