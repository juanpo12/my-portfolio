'use client'

import {Navbar as NavbarNext, Link, NavbarContent, NavbarItem, NavbarBrand } from "@nextui-org/react"

import {Link as ScrollLink} from 'react-scroll'
import Image from "next/image"

const Navbar = () => {
    
    return(
        <NavbarNext maxWidth="full"  className="border-b-2 border-blue-500 border-opacity-20 rounded-sm bg- ">
            <NavbarBrand className="hidden md:flex">
                <Image src="/logo.png" width={100} height={50} alt="logo" />
                <p className="font-bold text-inherit hidden md:block font-mono">Juan José Diaz</p>
            </NavbarBrand>
            <NavbarContent className="flex gap-6 text-lg" justify="center">
            <NavbarItem>
                <Link as={ScrollLink}  to="#about" smooth={true} duration={600} color="foreground" className="text-white" href="#">
                About me
                </Link>
            </NavbarItem>
            <NavbarItem isActive>
                <Link as={ScrollLink}  to="#projects" smooth={true} duration={600} color="foreground" className="text-white" href="#projects">
                    Works
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link as={ScrollLink}  to="#skills" smooth={true} duration={600} href="#" className="text-white" aria-current="page">
                    Skills
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link as={ScrollLink}  to="#contact" smooth={true} duration={600} color="foreground" className="text-white" href="#">
                    Contact me
                </Link>
            </NavbarItem>
            </NavbarContent>
            <NavbarContent className="hidden md:block justify-end"/>
      </NavbarNext>
    )
}

export default Navbar