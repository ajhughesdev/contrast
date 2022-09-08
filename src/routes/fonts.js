import { getFonts } from '../api/fonts'

const Fonts = () => {
  let fonts = getFonts()

  return (
    <>
      {fonts.map((font) => (
        <article key={font.Title}>
          <img src={`/icons/fonts/${font.Icon}`} alt={font.Title} />
          <h2>{font.Title}</h2>
          <p>{font.Description}</p>
          <a href={font.Link}>Visit Resource →</a>
        </article>
      ))}
    </>
  )
}
export default Fonts
