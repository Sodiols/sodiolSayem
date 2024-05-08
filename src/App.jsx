import About from "./Components/About/About"
import Hero from "./Components/Hero/Hero"
import LeftNavbar from "./Components/LeftNavbar/LeftNavbar"
import Skills from "./Components/Skills/Skills"


function App() {
  return (

    <div className="sodiol">
      <LeftNavbar />

      <div className="inside-body">

        <Hero />
        <About />
        <Skills/>

      </div>
    </div>

  )
}

export default App
