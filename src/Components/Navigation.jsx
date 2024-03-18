import Image from "next/image";
import Link from "next/link";

import {BANGE_URLS, SOCIAL_ICONS} from "../../constants/globals.js"

function Navigation() {
    
    return (
        <header>
            {/* Header de informativo */}
            <div className="bg-green-600">
                <div className="container m-auto flex justify-between gap-2 text-white">
                    <ul>
                        {SOCIAL_ICONS.map(
                            (icon, index) => {
                            <Link href={icon.url} key={index}>
                            <Image src={icon.img} alt={icon.name} />
                            </Link>
                        })}
                    </ul>
                    <div className="flex gap-2 items-center">
                        <span>Lun. - Vier/ 08:00h - 15:30h | Sab: 10:00h - 14:00h</span>
                        <a href="/"><span>atencionalcliente@bannge.com</span></a>
                        <Link href="/"><span>Trabajo con nosotros</span></Link>
                    </div>
                </div>
            </div>
            {/* Header de navegación */}
            <nav className="container flex bg-transparent w-100">
                <div className="brands">
                    <Image src={BANGE_URLS.logo} priority={true} layout="fixed" width={200} height={200} alt="Logo Bange"/>
                </div>
                <ul className="flex">
                    <li className="py-3 px-2">
                        <Link href={"/informacion-corporativa"}>Inf. Corporativa</Link>
                    </li>
                    <li className="py-3 px-2">
                        <Link href={"/"}>Productos y Servicios</Link> 
                        <div><span><i class="fa fa-arrow-down" aria-hidden="true"></i></span></div>
                    </li>
                    <li className="py-3 px-2">
                        <Link href={"/"}>Filiales</Link>
                    <div><span><i class="fa fa-arrow-down" aria-hidden="true"></i></span></div>
                    </li>
                    <li className="py-3 px-2">
                        <Link href={"/"}>Publicaciones</Link>
                    </li>
                </ul>
                <div>
                    <button>Web Banking 
                        <i className="fa fa-arrow-down" aria-hidden="true"></i>
                    </button>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
            </nav>
        </header>
    )
}

export default Navigation;