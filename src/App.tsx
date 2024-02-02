import { useState } from 'react'
import './App.css'
import { Navbar } from './scenes/Navbar'

enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  return (
      <div className='app bg-gray-50'>
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      </div>
  )
}

export default App
