'use client'
import { Button, Image, Link } from "@nextui-org/react"
import NextLink from "next/link"
import NextImage from "next/image"
import { useState } from "react"

type Project = {
    title: string
    description: string
    image: string
    deployUrl: string
    repoUrl: string
    isPublic: boolean
    isPublicDeploy: boolean
}

const Projects = () => {
    const projects : Project[] = [
        {
            title: "Velorio cancelado",
            description: '"Velorio Cancelado" is a website to promote an event by the church Cristo la Solución; it is an invitation to their Holy Week event.',
            image: "/veloriocanelado.jpg",
            deployUrl: "https://velorio-cancelado.vercel.app/",
            repoUrl: "https://github.com/juanpo12/velorio-cancelado",
            isPublic: true,
            isPublicDeploy: true
        },
        {
            title: "ONG Colibríes",
            description: "This project represents an inspiring vision of a cryptocurrency dedicated to fostering prosperity and collective sovereignty.",
            image: "/ong.png",
            deployUrl: "https://unifying.earth/",
            repoUrl: "https://github.com/QuickCodeFusion/sumak-kawsay-web",
            isPublic: false,
            isPublicDeploy: true
        },
        {
            title: "Quick Code",
            description: "Discount Dash is an application that sells products nearing their expiration dates at reduced prices, helping to minimize food waste and save money.",
            image: "/qcportfolio.png",
            deployUrl: "https://discountdash.vercel.app/",
            repoUrl: "https://github.com/QuickCodeFusion/portfolio",
            isPublic: false,
            isPublicDeploy: false
        }
    ]

    return(
        <div id="projects" className="md:grid flex flex-col md:grid-row-3 justify-center text-center gap-6 mt-6  w-full p-5" >
            <h1 className="text-3xl font-mono">Some of my works</h1>
            <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4">
                {
                    projects.map((project) => (
                        <div key={project.title} className="flex flex-col md:mb-4 items-center md:w-1/3 bg-gray-800 bg-opacity-50 rounded-3xl pt-5">
                            <div className="w-fit flex flex-col p-2 text-white">
                                <div className=" self-center">
                                    <Image as={NextImage} className="hover:scale-110 cursor-pointer" src={project.image} alt={project.title} width={400} height={400} />
                                </div>
                                <div className="p-4">
                                    <h2 className="text-xl font-Raleway">{project.title}</h2>
                                            <p className="text-lg font-mono">{project.description}</p>
                                </div>
                            </div>
                            <div className="flex m-2 h-full border-gray-700 items-end  w-full">
                                    <Button isDisabled={!project.isPublic} className="flex w-1/2 justify-center border-t-small border-r border-gray-700 items-center gap-3 rounded-none bg-inherit"> 
                                        <Link target="_blank" className="flex gap-4" as={NextLink} href={project.repoUrl}>
                                            <Image as={NextImage} src='/github(3).png' alt={project.title} width={30} height={50}></Image>
                                                <p className="text-blue-400">Repository</p>
                                        </Link>
                                    </Button>
                                    <Button isDisabled={!project.isPublicDeploy} className="flex w-1/2 border-t-small border-gray-700 justify-center items-center gap-3 rounded-none bg-inherit"> 
                                        <Link target="_blank" className="flex gap-4" as={NextLink} href={project.deployUrl}>
                                            <Image as={NextImage} src='/web3.png' alt={project.title} width={30} height={50}></Image>
                                            <p className="text-blue-400">Deploy</p>
                                        </Link>
                                    </Button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects
