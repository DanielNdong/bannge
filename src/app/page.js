"use client"

import { HeroHomeImage } from "@/Components/Utilities/myUtlities";
import { HomeServices, BannerContent, HomeFeatures } from "@/Components/HomeIterables/myHomeIterables";
import MainBlog from "@/Components/MainBlog";

import "./globals.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroHomeImage className="hero-image pt-5">
        <div className="container m-auto overflow-hidden" style={{padding: "11rem 6.7rem 0"}}>
          <div className="grid gap-4 w-75 text-white">
            <h5>El Banco que se adapta a tus encesidades</h5>
            <h1 className="oswald-test" >Banco Nacional <br/> de Guinea Ecuatorial</h1>
            <p className="text-white font-xl">El banco de todos</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-white absolute m-auto left-0 right-0 bottom-9" style={{width: "82%",maxWidth: "1468px"}}>
            <BannerContent />
          </div>
        </div>
      </HeroHomeImage>
      <section>
        <section className="w-2/4 text-center mt-12 mb-24 mx-auto" style={{maxWidth: "590px"}}>
          <h5 className="mb-5 text-green-600">PRODUCTOS Y SERVICIOS</h5>
          <p className="text-sm">Nuestro compromiso es brindarte una amplia gama de servicios financieros diseñados para satisfacer tus necesidades específicas. Permítenos ser tu socio en el camino hacia el éxito. A continuación, te presentamos nuestros servicios estrella:</p>
        </section>
        <section className="container m-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-9 px-16 md:px-8   mb-24" style={{width: "88%",maxWidth: "1468px"}}>
          <HomeServices />
        </section>
        <section className="grid grid-rows-1 md:grid-rows-3 bg-slate-100">
          <HomeFeatures />
        </section>
      </section>
      <section className="w-2/4 text-center mt-12 mb-24 mx-auto" style={{maxWidth: "590px"}}>
          <h5 className="mb-5 text-green-600" >ÚLTIMAS NOTICIAS</h5>
          <p className="text-sm">Mantente informado sobre las novedades mñas relevantes en el ámbito financiero. Desde actualizaciones sobre servicios bancarios hasta estrategias comerciales de alto rendimiento y te brindamos información precisa para potenciar tu conocimiento. No pierdas la oportunidad de estar al tanto de los avances más recientes</p>
      </section>
      <section className="m-auto">
        <MainBlog />
      </section>
    </main>
  );
}
