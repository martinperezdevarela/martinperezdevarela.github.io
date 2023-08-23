import logo from '../assets/logo.png'
import './HUD.css'

export default function HUD() {
  return (
    <>
      <div id="hud-container">
        <div id="hud" className='prevent-select trapezium'>
          <a href="https://www.linkedin.com/in/martin-perez-de-varela" target="_blank">
            <img src={logo} className="logo" alt="Logo" />
          </a>
          <h1>Martin Perez De Varela</h1>
          <h2>Design & Development</h2>
        </div>
      </div>
    </>
  )
}
