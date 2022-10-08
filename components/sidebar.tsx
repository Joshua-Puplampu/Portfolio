import React from 'react';
import Image from 'next/image';
import Me from '../images/me.jpg';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import {GiTie} from 'react-icons/gi';

const sidebar = () => {
  return (
    <div>
      <Image src={Me} alt='user avatar' className='w-30 h-30 rounded-full mx-auto'/>
        <h3 className='my-4 text-3xl font-medium tracking-wider'>
            <span>Puplampu Buer </span>
            Joshua
        </h3>
        <p className='px-2 py-1 my-3 bg-gray-200 rounded-full'>
          Web Devloper
        </p>

        <a href='#' download='name' className='px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center'>
          <GiTie className='w-6 h-6'/>
          Download Resume
        </a>
        {/* //social icon */}

        <div className='flex lg:justify-center justify-around my-5 text-yellow-500 '>
          <a href="">
            <AiFillGithub className='w-8 h-8 cursor-pointer'/>
          </a>

          <a href="">
            <AiFillLinkedin className='w-8 h-8 cursor-pointer'/>
          </a>

        </div>


        {/* address */}
        <div >
            <div className='my-5 py-4 bg-gray-200' style={{marginLeft:'-1rem', marginRight:'-1rem'}}>
              <div className='flex item-center justify-center'>
                <GoLocation/>
                <span>Accra,Ghana</span>
              </div>
               <p>josh.buer2@gmail.com</p>
               <p>+233593859133</p>
            </div>

            {/* Email Button */}
            <button>Email me</button>
            <button>Toggle Theme</button>
        </div>


    </div>
  )
}

export default sidebar
