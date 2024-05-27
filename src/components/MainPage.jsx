import React from 'react'
import Header from './Header'
import Intro from './Intro'
import TotQuesStat from './TotQuesStat'
import Community from './Community'
import LinkedGitLink from './LinkedGitLink'
import CodingSite from './CodingSite'
import Skills from './Skills'
import YourQues from './YourQues'
import Footer from './Footer'
// import '../Dasboard.css'
const MainPage = () => {
  return (
   <React.Fragment>
    <section>
       <div className='dashboard-layout'>
        <div className='header centered'>
          <Header/>
        </div>

        <div className='intro centered'>
          <Intro/>
        </div>
        
        <div className='ques-stat centered'>
          <TotQuesStat/>
        </div>
        
        <div className='community centered'>
          <Community/>
        </div>
        
        <div className='linkedin-git centered'>
          <LinkedGitLink/>
        </div>
         
        <div className='coding-site centered'>
          <CodingSite/>
        </div>
        
        <div className='skills centered'>
          <Skills/>
        </div>

        <div className='your-ques centered'>
          <YourQues/>
        </div>
        
        <div className='footer centered'>
          <Footer/>
        </div>
        
       </div>
    </section>
   </React.Fragment>
  )
}

export default MainPage;