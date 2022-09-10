import { Link } from 'react-router-dom'
import Button from './Button'

const NavMenu = () => {
  return (
    <div
      className='NavMenu'
      style={{
        display: 'none',
      }}
    >
      <Link to='#'>Browse</Link>
      <Link to='#'>Sponsor</Link>
      <Link to='#'>Templates</Link>
      <form>
        <input type='search' placeholder='Search resources' />
      </form>
      <Button />
    </div>
  )
}

export default NavMenu
