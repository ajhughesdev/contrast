import { getIcons } from '../api/icons'

const Icons = () => {
  let icons = getIcons()

  return (
    <div className='card_container'>
      {icons.map((icon) => (
        <article key={icon.Title} className="card" >
          <img src={`/icons/icons/${icon.Icon}`} alt={icon.Title} />
          <h2>{icon.Title}</h2>
          <p>{icon.Description}</p>
          <a className='card_link' href={icon.Link}>Visit Resource →</a>
        </article>
      ))}
    </div>
  )
}
export default Icons