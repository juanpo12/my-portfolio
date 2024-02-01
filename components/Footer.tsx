import { Image } from "@nextui-org/react"
import { Link } from "@nextui-org/react"
import NextImage from "next/image"
import NextLink from "next/link"


const Footer = () => {
    
    return(
        <footer className="md:grid grid-cols-3 justify-center  items-center bg-gray-950 text-white text-center  py-4">
            <p className="flex w-full order-2 justify-center text-center  align-middle">© 2024 Juan José Diaz. All rights reserved.</p>
            <div className="flex justify-center sm:justify-end order-last gap-4  ">
                <Link className="w-fit" as={NextLink} href={"https://github.com/juanpo12"}>
                    <Image as={NextImage} src='/github(1).png' alt={"Github"} width={40} height={40}></Image>
                </Link>
                <Link className="w-fit" as={NextLink} href={"https://www.linkedin.com/in/juan-diaz-dev1/"} >
                    <Image as={NextImage} src='/linkedin.png' alt={"Linkedin"} width={40} height={40}></Image>
                </Link>
                <Link className="w-fit" as={NextLink} href={"https://wa.me/1126606410?text=mensaje"}>
                    <Image as={NextImage} src='/whatsapp.png' alt={"WhatsApp"} width={40} height={40}></Image>
                </Link>
            </div>
            <p className="flex w-full order-1 text-center  align-middle"></p>
        </footer>
        )
}

export default Footer