
import logo from '../assets/logo.png'
import roundlogo from '../assets/logo-round.png'

function Header() {
  return (
    <header>
      <img className='roundlogo' src={roundlogo} alt='round eatila logo' />
      <img src={logo} alt="eat.ഇല logo" />
      


      {/* <h5>The leaf finder</h5> */}

      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
  )
}

export default Header