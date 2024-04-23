import logo from './../assets/icons/logo.svg'
import './../css/header.css'

const Header = () => {
  return (
    <header>
      <div>
        <img className='logo' src={logo} alt='logo' />
        <h1>سفرکن</h1>
      </div>
      <div className='bars'>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
    </header>
  )
}

export default Header