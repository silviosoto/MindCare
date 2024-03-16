import React from "react";
import Link from "next/link";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import { useRouter } from 'next/router'
export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/foto-gratis/amigos-felices-tiro-medio-al-aire-libre_23-2149003084.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                  Te mereces ser feliz.
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                  ¿Qué tipo de terapia estás buscando?.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      {/* <i className="fas fa-heart"></i> */}
                      <i class="fas fa-user"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Individual</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Para mi mismo
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-heart"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Parejas</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                       Para mi y mi pareja.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i class="fas fa-child"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Jovenes</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Apoyo para jovenes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Terapeutas profesionales y certificados en quienes puede confiar.
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Acceda a la red más grande del mundo de terapeutas experimentados y acreditados
                  que pueden ayudarlo con una variedad de problemas que incluyen depresión, ansiedad,
                  relaciones, trauma, duelo y más. Con nuestros terapeutas, obtendrá el mismo 
                  profesionalismo y calidad que esperaría de un terapeuta en el consultorio, 
                  pero con la capacidad de comunicarse cuando y como quiera.
                </p>
                
                {/* <Link href="/">
                  <a href="#pablo" className="font-bold text-blueGray-700 mt-8">
                    Check Notus NextJS!
                  </a>
                </Link> */}
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                  <img
                    alt="..."
                    src="https://images.pexels.com/photos/7176036/pexels-photo-7176036.jpeg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="max-w-full rounded-lg shadow-lg"
                  />
 
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">¿Eres psicologo y te gustaria hacer parte de nuestra comunidad ?</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                 Encuentra aquí la oportuniad de ayudar a muchas personas desde la comodiad de tu casa. 
                </p>
                <Link href="/auth/register">
                <button                   
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      Click={() => router.push('/auth/register')}
                >
                  Trabaja con nosotros
                </button>
                </Link>
              </div>
            </div> 
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.pexels.com/photos/4226263/pexels-photo-4226263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12 pt-8 ">
                  <h2 className="text-4xl font-semibold">¿Como Funciona?</h2>
                </div>
                <div className="md:pr-12 pt-6 ">
                  <h3 className="text-3xl font-semibold">Escoge el profecional</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Puedes escogr el profecional que tú prefieras.
                  </p>
                </div>

                <div className="md:pr-12 pt-6">
                  <h3 className="text-3xl font-semibold">Comunicate a tu manera</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Puedes escoger la forma en que quieres comunicarte. Texto, llamda, video llamada.
                  </p>
                </div>

                <div className="md:pr-12 pt-6">
                  <h3 className="text-3xl font-semibold">Horario flexible</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Puedes escoger que dia quieres tu cita.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section> 
        
        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                Desde donde lo nececites
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Puedes acceder desde la comunidad de tu casa, trabajo o donde quieras.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                Bienestar Emocional
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                Mantener una salud mental adecuada contribuye a un equilibrio emocional.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Rendimiento Cognitivo:
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                Una buena salud mental está asociada con un rendimiento cognitivo óptimo.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-street-view text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Calidad de Vida General
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                La salud mental positiva contribuye significativamente a la calidad de vida general.
                </p>
              </div>
            </div>
          </div>
        </section>
   
      </main>
      <Footer />
    </>
  );
}
