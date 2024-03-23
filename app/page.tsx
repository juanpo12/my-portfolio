'use client'
import Profile from '@/components/Profile'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import ContactMe from '@/components/ContactMe'
import Footer from '@/components/Footer'
import { Element } from 'react-scroll'
import DownloadCv from '@/components/DownloadCv'
export default function Home() {
  return (
    <>
      <Element name="#about" className='pt-20'>
        <Profile/>
      </Element>
      <Element className='pt-20' name="#projects">
        <Projects/>
      </Element>
      <Element className='pt-20' name="#skills">
      <Skills/>
      </Element>
      <Element className='pt-20' name="#contact">
        <ContactMe/>
      </Element>
      <DownloadCv/>
      <Footer/>
    </>
  )
}
