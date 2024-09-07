import Image from "next/image"
import profilePic from "./media/profile.jpg"
import {FaHtml5, FaLaravel, FaCss3Alt, FaJs, FaReact, FaWordpress, FaPhp, FaSass, FaBootstrap, FaNpm, FaGit, FaUbuntu } from 'react-icons/fa';
import ConnectButtons from "@/app/connectButtons";

export default function Home() {
    return (
        <>
            <div className="container my-16 mx-auto px-4 text-white">
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="p-4 text-center md:text-left md:w-1/2 order-2 md:order-1">
                        <h1 className="text-6xl font-bold mb-8">Hey, I'm <span className="text-primary">Nino</span></h1>
                        <p className="text-lg mb-8">
                            I am a passionate <span className="font-bold">software developer</span> with experience in
                            creating innovative and custom software
                            solutions.
                            Specializing in <span className="font-bold">web development</span>, I am dedicated to
                            turning ideas
                            into digital reality through
                            clean and scalable code.
                        </p>
                        <ConnectButtons/>
                    </div>
                    <div className="p-4 flex items-center justify-center md:w-1/2 order-1 md:order-2">
                        <Image
                            src={profilePic} // Percorso dell'immagine nella cartella `public`
                            alt="Descrizione dell'immagine"
                            width={300}
                            height={300}
                            style={{borderRadius: '50%'}}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap mt-16 md:mt-32 justify-center">
                    <FaHtml5 className="w-12 h-12 m-4"/>
                    <FaCss3Alt className="w-12 h-12 m-4"/>
                    <FaJs className="w-12 h-12 m-4"/>
                    <FaPhp className="w-12 h-12 m-4"/>
                    <FaReact className="w-12 h-12 m-4"/>
                    <FaLaravel className="w-12 h-12 m-4"/>
                    <FaWordpress className="w-12 h-12 m-4"/>
                    <FaSass className="w-12 h-12 m-4"/>
                    <FaNpm className="w-12 h-12 m-4"/>
                    <FaGit className="w-12 h-12 m-4"/>
                    <FaUbuntu className="w-12 h-12 m-4"/>
                </div>
                <footer className="text-white py-4 mt-32">
                    <div className="container mx-auto text-center">
                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} Nino. All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}
