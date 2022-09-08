import { getIcons } from '../api/icons'

const Icons = () => {
  let icons = getIcons()

  return (
    <>
      {icons.map((icon) => (
        <article key={icon.Title}>
          <img src={`/icons/icons/${icon.Icon}`} alt={icon.Title} />
          <h2>{icon.Title}</h2>
          <p>{icon.Description}</p>
          <a href={icon.Link}>Visit Resource →</a>
        </article>
      ))}
    </>
  )
}
export default Icons