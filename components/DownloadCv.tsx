import { Button, Image, Link } from "@nextui-org/react"
import NextImage from "next/image"

const DownloadCv = () => {


    return (
        <div className="flex justify-center p-4" >
            <div className="flex flex-col bg-gray-800 bg-opacity-50 rounded-3xl p-4 gap-6">
                <Link target="_blank" href="/cv.pdf" >
                    <Image className=" hover:scale-110 cursor-pointer" src="/panda.png" alt="download" width={400} height={800}></Image>
                </Link>
            </div>
        </div>
    )
}

export default DownloadCv