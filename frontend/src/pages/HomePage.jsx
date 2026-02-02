import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Banner from '../components/Banner.jsx'
import NewsHome from '../components/NewsHome.jsx'
import About from '../components/About.jsx'
import Footer from '../components/Footer.jsx'
import Contact from '../components/Contact.jsx'
import Chatbot from '../components/Chatbot.jsx'



const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
        {/*Navbar*/}
        <Navbar/>
        {/*Main Content*/}
        <main >
            <Banner/>
            <NewsHome/>
            <About/>
            <Contact/>
        </main>
        {/*Footer*/}
         <Footer/>
          <Chatbot/>
    </div>
   
  )
}

export default HomePage