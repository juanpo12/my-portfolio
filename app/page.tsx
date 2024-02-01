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
      <Element name="#about">
        <Profile/>
      </Element>
      <Element name="#projects">
        <Projects/>
      </Element>
      <Element name="#skills">
      <Skills/>
      </Element>
      <Element name="#contact">
        <ContactMe/>
      </Element>
      <DownloadCv/>
      <Footer/>
    </>
  )
}
