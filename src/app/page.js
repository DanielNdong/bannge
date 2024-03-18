"use client"

import ItemBanner from "@/Components/ItemBanner";
import { TEXT_ITEM_BANNER, SERVICES } from "../../constants/text";
import Cards from "@/Components/Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowDown91 } from "@fortawesome/free-solid-svg-icons";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="container hero-image">
          <div className="w-75">
            <h5>El Banco que se adapta a tus encesidades</h5>
            <h1>Banco Nacional <br/> de Guinea Ecuatorial</h1><FontAwesomeIcon icon={faArrowDown91} className="fa-solid fa-angle-down" style={{ color: "red" }}
></FontAwesomeIcon><i class="fa-solid fa-angle-down"></i>
            <p>El banco de todos</p>
          </div>
          <div className="flex gap-3">
              {TEXT_ITEM_BANNER.map(
                (text, index) => (
                  <ItemBanner 
                    titles={text.title}
                    description={text.description} 
                    key={index}
                    />
              ))}
          </div>
      </section>
      <section>
        <section>
          <h5>PRODUCTOS Y SERVICIOS</h5>
          <p>Nuestro compromiso es brindarte una amplia gama de servicios financieros diseñados para satisfacer tus necesidades específicas. Permítenos ser tu socio en el camino hacia el éxito. A continuación, te presentamos nuestros servicios estrella:</p>
        </section>
        <section className="grid grid-cols-4 gap-5 gap-y-8">
            {SERVICES.map(
              (service, index) => (
                <Cards 
                  key={index}
                  img={service.img}
                  path={service.href}
                  title={service.title}
                  description={service.description}
                />
              )
            )}
        </section>
      </section>
    </main>
  );
}
