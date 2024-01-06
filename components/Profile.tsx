'use client'
import { Image, Spacer } from "@nextui-org/react"
import NextImage from "next/image"

const Profile = () => {

    return (
            <div className="w-full flex justify-center items-center h-screen">
                <div className="flex flex-col justify-center items-center p-3 rounded-lg h-[70%] w-2/3">
                        <span className="flex justify-center">
                            <h3 className="relative mt-10 md:mt-0 py-1 w-[max-content] text-center font-mono text-4xl
                                before:absolute before:inset-0 before:animate-typewriter
                                before:bg-black
                                after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
                                after:bg-white">Hello there 👋</h3>
                        </span>
                    <div className="flex flex-col justify-center items-center md:h-[60vh] gap-10">
                            <Image as={NextImage} alt="profile" src="/sinFondo.jpg" className="rounded-full shadow-2xl size-4/4 " width={300} height={300}></Image>
                        <div className="flex flex-col justify-center text-center">
                            <h1 className="text-2xl font-mono">Juan José Diaz</h1>
                            <h2 className=" font-mono">FullStack Developer</h2>
                            <Spacer y={3}></Spacer>
                            <h4 className="text-xl font-mono">I create exceptional web experiences, design attractive interfaces and <br />
                                develop web 
                                applications with passion.
                                Specialized in optimizing the user experience.
                            </h4>
                            <Spacer y={3}></Spacer>
                            <p>
                                I use technologies like Firebase, TypeScript, Next.js, and Redux Toolkit.
                                Your next web project begins here.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Profile