import React from 'react';
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from '../components';
export default function Home() {
  return (
   <React.Fragment>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
   </React.Fragment>
  )
}
