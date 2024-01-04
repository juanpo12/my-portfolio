'use client'

import { Input } from "@nextui-org/react"

const ContactMe = () => {
    
    return(
        <div className="w-2/3 h-full flex flex-col justify-center 
        items-center bg-gray-800 bg-opacity-50 rounded-3xl gap-4 text-center">
            <h1 className="text-3xl font-mono">Contact me</h1>
            <div className="flex flex-col gap-4">
                <Input placeholder="Name"/>
                <Input type="email" variant={'bordered'} label="Email" placeholder="Enter your email" />
            </div>
            <button className="p-2 rounded-full">Send</button>
        </div>
    )
}

export default ContactMe