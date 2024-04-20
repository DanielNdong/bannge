"use client"

import Image from "next/image";
import Link from "next/link";
import { IconLink } from "./Utilities/myUtlities.jsx";
import { BANGE_URLS, SOCIAL_ICONS } from "../../constants/globals.js";

import styles from '../css/Header.module.css';

import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { ChartBarSquareIcon, HomeIcon } from '@heroicons/react/24/solid';
import { useEffect } from "react";


function Navigation({ params }) {

    useEffect(() => {
        const header = document.querySelector("header");
        const img = document.querySelector("header > nav .brands img");
        const headerNav = document.querySelector("header > nav.nav");
        console.log(header)
        console.log(img)
        let currrentScroll = 0
        function checkScroll() {
        if (window.scrollY > currrentScroll) {
            header.classList.add("headerScrollEffect");
            console.log("scroll baja")
            headerNav.classList.remove("showNav")
        }
        
        if (window.scrollY < currrentScroll) {
            header.classList.remove("headerScrollEffect");
            console.log("scroll sube");
            headerNav.classList.add("showNav");
        }
        if (window.scrollY = 0) {
            headerNav.classList.remove("showNav");
            headerNav.classList.add("showNav-second");
        }

        currrentScroll = window.scrollY
        }
    
        window.addEventListener("scroll", checkScroll);
    
        // Elimina el evento de escucha al limpiar
        return () => window.removeEventListener("scroll", checkScroll);
    }, []);
    
  
    
    return (
        <header className={`w-full z-20 transition-all`} >
            {/* Header de informativo */}
            <div className={styles.header}>
                <div className="block md:flex m-auto justify-center md:justify-between gap-2 w-2/3 text-white" style={{width: "82%",maxWidth: "1468px"}}>
                    <ul className="flex justify-center items-center gap-2">
                    {SOCIAL_ICONS.map(
                        (icon, index) => (
                            <li style={{width: "18px"}} key={index}>
                                <IconLink src={icon.path} img={icon.path} alt={icon.name}/>                                
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-2 items-center w-max" style={{fontSize: "4px"}}>
                        <span className="w-max">Lun. - Vier/ 08:00h - 15:30h | Sab: 10:00h - 14:00h</span>
                        <a href="/"><span>atencionalcliente@bannge.com</span></a>
                        <Link href="/"><span className="w-max">Trabajo con nosotros</span></Link>
                    </div>
                </div>
            </div>
            {/* Header de navegación */}
            <nav className="nav hidden md:flex md:justify-center m-auto bg-opacity-30" style={{width: "100%"}}>
                <div className="flex justify-between" style={{width: "1468px"}}>
                    <div className="brands flex items-center">
                        <Image src={BANGE_URLS.logo}  className="w-1/2" priority={true} width={320} height={320} style={{width: "201px"}} alt="Logo Bange"/>
                    </div>
                    <ul className="flex items-center gap-3 mr-5">
                        <li className="flex items-center gap-1 py-12 px-2 text-xs font-semibold ">
                            <Link href={"/informacion-corporativa"}>Inf. Corporativa</Link>
                            <ChevronDownIcon className="h-3"/>
                        </li>
                        <li className="flex items-center gap-1 py-12 px-2 text-xs font-semibold">
                            <Link href={"/"}>Productos y Servicios</Link> 
                            <ChevronDownIcon className="h-3"/>
                        </li>
                        <li className="flex items-center gap-1 py-12 px-2 text-xs font-semibold">
                            <Link href={"/"}>Filiales</Link>
                            <ChevronDownIcon className="h-3"/>
                        </li>
                        <li className="flex gap-1 py-12 px-2 text-xs font-semibold">
                            <Link href={"/"}>Publicaciones</Link>
                        </li>
                    </ul>
                    <div className="flex items-center justify-center">
                            <Link href="/" className="flex items-center gap-2 py-1 px-2 text-xs font-semibold border-2 border-zinc-800 rounded-sm ">
                                Web Banking
                                <ChevronDownIcon className="h-3"/>
                                <ChartBarSquareIcon className="h-3"/>
                            </Link>
                        <i className="bi bi-search"></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navigation;