import About from "./Components/About/About"
import Hero from "./Components/Hero/Hero"
import LeftNavbar from "./Components/LeftNavbar/LeftNavbar"
import Services from "./Components/Services/Services"
import Skills from "./Components/Skills/Skills"


function App() {
  return (

    <div className="sodiol">
      <LeftNavbar />

      <div className="inside-body">

        <Hero />
        <About />
        <Skills/>
        <Services/>

      </div>
    </div>

  )
}

export default App
