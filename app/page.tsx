import Image from 'next/image'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import About from './Components/about'
import Skill from './Components/Skill'

export default function Home() {
  return (<>
    <HeroSection/>
    <About/>
    <Skill/>
    <Projects/>
    <Contact/>
    </>

  )
}
