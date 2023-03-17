import React, {useState} from 'react'
import bookingImg from '../public/booking.png'
import tfg1Img from '../public/tfg1.png'
import easybankImg from '../public/easybank.png'
import personalTrainerImg from '../public/personal-trainer.png'
import Image from 'next/image'
import { AiFillGithub, AiOutlineExport } from 'react-icons/ai'
import { MdOutlineFindInPage } from 'react-icons/md'
import { Carousel } from './Carousel'
import { ReactTech } from './techs/ReactTech'
import { SassTech } from './techs/SassTech'
import { AxiosTech } from './techs/AxiosTech'
import { ApiRESTTech } from './techs/ApiRestTech'
import { ExpressTech } from './techs/ExpressTech'
import { PostmanTech } from './techs/PostmanTech'
import { CypressTech } from './techs/CypressTech'
import { MDBTech } from './techs/MDBTech'
import { HtmlTech } from './techs/HtmlTech'
import { CssTech } from './techs/CssTech'
import { BootstrapTech } from './techs/BootstrapTech'

export const ProjectCard = ({name}) => {
  const [close, setClose] = useState(false)

  const map = {
    tfg: {
      src: tfg1Img,
      title: "FINAL DEGREE PROJECT",
      explanation: "As my final degree project, I created a multiplatform web application for primary care centers in Spain. On this website you can search for a patient, take a look at their medical history, create visits, and generate patient lists.",
      tech: <div className='flex gap-2 flex-wrap justify-center'><ReactTech/><SassTech/><AxiosTech/><ApiRESTTech/><MDBTech/><ExpressTech/><PostmanTech/><CypressTech/></div>,
      code: "https://github.com/nuriia99/tfgFrontend",
      demo: <button onClick={() => setClose(true)} className='inline-flex gap-2 items-center'>See more <MdOutlineFindInPage/></button>
    },
    booking: {
      src: bookingImg,
      title: "BOOKING CLONE",
      explanation: "Booking.com is a website that allows users to compare hotel prices and make reservations. In this personal project, a clone of the main page of Booking.com has been created to learn more in detail how to implement images and how carousels works.",
      tech: <div className='flex gap-2 flex-wrap justify-center'><ReactTech/><SassTech/></div>,
      code: "https://github.com/nuriia99/BookingProjectFrontend",
      demo: <a href="https://nacbooking.netlify.app/" target="_blank" className='flex justify-center items-center gap-3 cursor-pointer hover:text-red-600 transition ease-in-out duration-300'>Live Demo <MdOutlineFindInPage/> </a>
    },
    easybank: {
      src: easybankImg,
      title: "EASYBANK",
      explanation: <>Easybank project is a challenge from <a href='https://www.frontendmentor.io/' target="_blank" className='text-red-500 inline-flex gap-2 items-center'>Frontend Mentor <AiOutlineExport/></a>. That challenge consisted on create a landing page for an hypothetical bank. In that project I learnt about grid, flex and animations.</>,
      tech: <div className='flex gap-2 flex-wrap justify-center'><HtmlTech/><SassTech/></div>,
      code: "https://github.com/nuriia99/EasybankLandingPage",
      demo: <a href="https://naceasybank.netlify.app/" target="_blank" className='flex justify-center items-center gap-3 cursor-pointer hover:text-red-600 transition ease-in-out duration-300'>Live Demo <MdOutlineFindInPage/> </a>
    },
    personaltrainer: {
      src: personalTrainerImg,
      title: "FIT YOURSELF",
      explanation: "FitYourself it's a landing page that show the services of a personal trainer. In that project I learnt to layout, create a responsive website and the basics of css and bootstrap. ",
      tech: <div className='flex gap-2 flex-wrap justify-center'><HtmlTech/> <CssTech/> <BootstrapTech/></div>,
      code: "https://github.com/nuriia99/PersonalTrainer",
      demo: <a href="https://nacfityourself.netlify.app/" target="_blank" className='flex justify-center items-center gap-3 cursor-pointer hover:text-red-600 transition ease-in-out duration-300'>Live Demo <MdOutlineFindInPage/> </a>
    }
  }

  
  return (
    <>
      { close ? <Carousel close={() => setClose(false)}/> : null }
      <div className='zoom-in zoom-out shadow-md bg-orange-50 h-fit w-full max-w-[500px] lg:max-w-[1000px] rounded-md grid grid-rows-[200px_fit] lg:grid-rows-1 lg:grid-cols-[1.2fr_0.8fr] overflow-hidden mb-10'>
        <div className='relative h-[200px] lg:h-full w-full'>
          <Image src={map[name]?.src} fill style={{objectFit: 'cover'}}/>
        </div>
        <div className='p-8 flex flex-col gap-2 justify-center'>
          <h3 className='text-md font-semibold text-center'>{map[name]?.title}</h3>
          <p className='text-justify'>{map[name]?.explanation}</p>
          <h3 className='text-sm font-semibold text-center'>{map[name]?.tech}</h3>
          <div className='flex justify-center items-center gap-4 '>
            <a href={map[name].code} target="_blank" className='flex justify-center items-center gap-3 cursor-pointer hover:text-red-600 transition ease-in-out duration-300'>Code <AiFillGithub/></a>
            {map[name].demo}
          </div>
        </div>

      </div>
    </>
  )
}