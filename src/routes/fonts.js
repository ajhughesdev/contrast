import { getFonts } from '../api/fonts'

const Fonts = () => {
  let fonts = getFonts()

  return (
    <div className='card_container'>
      {fonts.map((font) => (
        <article key={font.Title} className='card'>
          <img src={`/icons/fonts/${font.Icon}`} alt={font.Title} />
          <h2>{font.Title}</h2>
          <p>{font.Description}</p>
          <a className='card_link' href={font.Link}>
            Visit Resource →
          </a>
        </article>
      ))}
    </div>
  )
}

export default Fonts
