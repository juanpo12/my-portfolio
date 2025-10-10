import { Image, Link } from "@nextui-org/react"
import { useLanguage } from "@/contexts/language-context"

const DownloadCv = () => {
    const { language } = useLanguage()

    return (
        <div className="flex justify-center p-4" >
            <div className="flex flex-col bg-gray-800 bg-opacity-50 rounded-3xl p-4 gap-6">
                <Link target="_blank" href={language === "en" ? "/cv/Resume.pdf" : "/cv/Curriculum Juan Diaz V.pdf"} >
                    <Image className=" hover:scale-110 cursor-pointer" src="/panda.png" alt="download" width={400} height={800}></Image>
                </Link>
            </div>
        </div>
    )
}

export default DownloadCv