import Header from './components/Header'
import './main.css'
import pp from './assets/2.png'
import Footer from './components/Footer'
import About from './containers/About'
import Contact from './containers/Contact'
import Works from './containers/Works'

function Portfolio() {
  return (
    <>
      <Header />
      <div className="flex flex-col xl:flex-row h-screen px-4">
        <div className="flex flex-1 items-center justify-center xl:justify-end">
          <img
            className="xl:w-2/4 sm:w-1/3 w-2/3 rounded-full border-8 border-black mt-20 xl:mt-0 xl:mr-32"
            src={pp}
            alt="Illustration du portrait d'Alexandra"
          />
        </div>
        <div className="flex flex-1 flex-col items-center xl:items-start justify-start xl:justify-center gap-5 xl:gap-10">
          <div className="text-center xl:text-start">
            <h2 className="2xl:text-4xl md:text-3xl text-2xl uppercase font-name font-bold">
              Alexandra <hr className="border-none" /> Marti-Montessinos
            </h2>
          </div>
          <p className="font-body font-semibold bg-bg-gray p-5 rounded-lg">
            Front-End Developer
          </p>
        </div>
      </div>
      <About />
      <Works />
      <Contact />      
      <Footer />
    </>
  )
}

export default Portfolio
