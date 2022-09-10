import { getToc } from '../api/toc'
import { NavLink } from 'react-router-dom'

const ResourceList = () => {
  let order = getToc()

  let activeStyle = {
    fontWeight: '700',
    color: '#0D0C21',
    padding: '.625rem 1.125rem',
    backgroundColor: '#F3F4F5',
    borderRadius: '.3125rem',
  }

  let nonactiveStyle = {
    fontWeight: '400',
    color: '#595959',
    padding: '10px 0',
    backgroundColor: 'transparent',
    borderRadius: '0',
  }

  return (
    <div className='resource-list'>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : nonactiveStyle)}
        to='/'
      >
        Fonts
      </NavLink>

      {order.map((item) => (
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : nonactiveStyle)}
          to={`./${item.category}`}
          key={item.category}
        >
          {item.category}
        </NavLink>
      ))}
    </div>
  )
}
export default ResourceList
