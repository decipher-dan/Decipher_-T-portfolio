import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { Mail } from 'lucide-react';


const Contact = () => {
  return (
    <div>
        <div className='bg-[#111111] text-gray-300 p-4 px-10 sm:px-20 lg:px-40 text-center flex flex-col'>
            <div className=' py-7 '>
                <p className=' text-1xl font-bold sm:text-2xl mb-10 text-left'>
                  Contact
                </p>
                <p className=' text-left mb-5'>
                  If you have any questions, suggestions, or just want to say hello, feel free to reach out! I'm always happy to connect and hear from you.
                </p>
                <p  className=' text-left'>
                     <a href="mailto:shedrachgoje@gmail.com">
                      <Mail className='inline-block mr-2'/>
                     {/* <FaEnvelope className='inline-block mr-2' /> */}
                     shedrachgoje@gmail.com
                    </a>.
                </p>
             </div>
             <div className='text-3xl flex flex-row-reverse'>
                <FaFacebook className='mx-2 cursor-pointer hover:text-blue-500 grow' />
                <FaWhatsappSquare className='mx-2 cursor-pointer hover:text-green-500 grow' /> 
                <FaInstagram className='mx-2 cursor-pointer hover:text-pink-500 grow' />
                <FaXTwitter className='mx-2 cursor-pointer hover:text-blue-400 grow' />
                <FaGithub className='mx-2 cursor-pointer hover:text-gray-500 grow' />
             </div>
        </div>       
    </div>
  )
}

export default Contact
