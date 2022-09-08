import { ReactComponent as Logo } from '../assets/contrast-logo.svg'
import { ReactComponent as Menu } from '../assets/hamburger.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <Logo />
      </Link>
      <Menu />
    </header>
  )
}
export default Header
