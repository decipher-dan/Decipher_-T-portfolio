import React from 'react'
import Header from './Header'
import Photo from './Photo'
import Buttons from './Buttons'
import Projects from './Projects'
import Experience from './Experience'
import  Contact  from './Contact'


const Container = () => {
  return (
    <>
      <div >
         <Header />
         <Photo />
         <Buttons />
         <Projects   />
         <Experience />
         <Contact />
      </div>
    </>
  
  )
}

export default Container
