import { getToc } from '../api/toc'
import { NavLink } from 'react-router-dom'

const ResourceList = () => {
  let order = getToc()
  return (
    <div className='resource-list'>
      <NavLink
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? '700' : '400',
            color: isActive ? '#0D0C21' : '#595959',
            padding: isActive ? '10px 18px' : '10px 0',
            backgroundColor: isActive ? '#F3F4F5' : 'transparent',
            borderRadius: isActive ? '5px' : '0',
          }
        }}
        to='/'
      >
        Fonts
      </NavLink>

      {order.map((item) => (
        <NavLink
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? '700' : '400',
              color: isActive ? '#0D0C21' : '#595959',
              padding: isActive ? '10px 18px' : '10px 0',
              backgroundColor: isActive ? '#F3F4F5' : 'transparent',
              borderRadius: isActive ? '5px' : '0',
            }
          }}
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
