import { getIllustrations } from '../api/illustrations'

const Illustrations = () => {
  let illustrations = getIllustrations()

  return (
    <>
      {illustrations.map((illustration) => (
        <article key={illustration.Title}>
          <img
            src={`/icons/illustrations/${illustration.Icon}`}
            alt={illustration.Title}
          />
          <h2>{illustration.Title}</h2>
          <p>{illustration.Description}</p>
          <a href={illustration.Link}>Visit Resource →</a>
        </article>
      ))}
    </>
  )
}
export default Illustrations
