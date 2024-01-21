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
}

const Projects = () => {
    const [projects, setProject] = useState<Project[]>([
        {
            title: "Alma Canabica",
            description: 'description 1',
            image: "/alma.png",
            deployUrl: "project1.com",
            repoUrl: "https://github.com/QuickCodeFusion/Alma-Cannabica"
        },
        {
            title: "Discount Dash",
            description: "Description 1",
            image: "/discountDash.png",
            deployUrl: "https://discountdash.vercel.app/",
            repoUrl: "https://github.com/UFCampos/Discount-Dash"
        },
        {
            title: "PI Countries",
            description: "Description 1",
            image: "/alma.png",
            deployUrl: "project1.com",
            repoUrl: "project1.com"
        },
        {
            title: "Alma CanabicaFIN",
            description: "Description 1",
            image: "/alma.png",
            deployUrl: "project1.com",
            repoUrl: "SOYELREPO.com"
        }
    ])


    return(
        <div id="projects" className="md:grid flex flex-col md:grid-row-3 justify-center text-center gap-6 mt-6  w-full p-5" >
            <h1 className="text-3xl font-mono">My Work</h1>
            <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4">
                {
                    projects.map((project) => (
                        <div key={project.title} className="flex flex-col md:mb-4 items-center md:w-1/3 bg-gray-800 bg-opacity-50 rounded-3xl pt-5">
                            <Link className="w-fit flex flex-col p-2 text-white" as={NextLink} href={project.deployUrl}>
                                <Image as={NextImage} src={project.image} alt={project.title} width={400} height={400} />
                                <div className="p-4">
                                    <h2 className="text-xl font-Raleway">{project.title}</h2>
                                    <p className="text-lg font-mono">{project.description}</p>
                                </div>
                            </Link>
                            {/* <Link className="w-fit" as={NextLink} href={project.repoUrl}>
                                <Image as={NextImage} src='/github(3).png' alt={project.title} width={50} height={50}></Image>
                            </Link>     */}
                            <div className="flex border-t-small border-gray-700 w-full h-12 ">
                                <Button className="flex w-[50%] justify-center border-r border-gray-700 items-center gap-3 rounded-none bg-inherit"> 
                                    <Image as={NextImage} src='/github(3).png' alt={project.title} width={30} height={50}></Image>
                                        <p className="text-blue-400">Repository</p>
                                </Button>
                                <Button className="flex w-[50%] justify-center items-center gap-3 rounded-none bg-inherit"> 
                                    <Image as={NextImage} src='/github(3).png' alt={project.title} width={30} height={50}></Image>
                                        <p className="text-blue-400">Repository</p>
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