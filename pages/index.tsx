import React from 'react';
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from '../components';
export default function Home() {
  return (
   <React.Fragment>
      <div className='relative z-0 bg-primary'>
        <div>
          <Navbar/>
          <Hero/>
        </div>
      </div>
   </React.Fragment>
  )
}
