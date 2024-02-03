import { useEffect, useState } from 'react'
import './App.css'
import { Navbar } from './scenes/Navbar'
import Home from './scenes/Home'
import Benefits from './scenes/Benifits'
import OurClasses from './scenes/OurClasses'
import ContactUs from './scenes/ContactUs'
import Footer from './scenes/Footer'

enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

//  console.log(selectedPage)
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) setIsTopOfPage(true);
      if(window.scrollY !== 0) setIsTopOfPage(false)
    }

    window.addEventListener("scroll", handleScroll)  
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
      <div className='app bg-gray-50'>
        <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        <Home setSelectedPage={setSelectedPage}/>
        <Benefits setSelectedPage={setSelectedPage}/>
        <OurClasses setSelectedPage={setSelectedPage}/>
        <ContactUs setSelectedPage={setSelectedPage}/>
        <Footer />
      </div>
  )
}

export default App
