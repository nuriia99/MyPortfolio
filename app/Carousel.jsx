import React, { useState, useRef, useEffect } from 'react'
import tfg1 from '../public/tfg1.png'
import tfg2 from '../public/tfg2.png'
import tfg3 from '../public/tfg3.png'
import tfg4 from '../public/tfg4.png'
import tfg5 from '../public/tfg5.png'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
import {AiFillCloseCircle} from 'react-icons/ai'
import Image from 'next/image'

export const Carousel = ({close}) => {
  const slides = [tfg1, tfg2, tfg3, tfg4, tfg5];

  const refImg = useRef(null)
  const refPoints = useRef(null)
  console.log(refImg)
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
  }, [])

  const handleClickOutside = (e) => {
    if (!refImg.current.contains(e.target) && !refPoints.current.contains(e.target)) close()
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
<div className='fixed top-0 left-0 w-full h-screen bg-gray-700 bg-opacity-80 z-20 '>
<div className='max-w-[1400px] h-full w-full m-auto py-16 px-4 relative group'>
      <div className='text-right'>
        <button onClick={close} className='text-white text-2xl'><AiFillCloseCircle/></button>
      </div>
      <div className='relative h-[90%] w-full' ref={refImg}>
        <Image className='w-full rounded-2xl bg-center bg-cover duration-500' src={slides[currentIndex]} fill style={{objectFit: 'contain'}}/>
      <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      </div>
      <div className='flex bottom-0 justify-center py-2' ref={refPoints}>
    {slides.map((slide, slideIndex) => (
      <div
        key={slideIndex}
        onClick={() => goToSlide(slideIndex)}
        className={slideIndex === currentIndex ? 'text-2xl cursor-pointer text-red-500' : 'text-2xl cursor-pointer text-white'}
      >
        <RxDotFilled />
      </div>
    ))}
    </div>
   
  </div></div>
  )
}