import { getIllustrations } from '../api/illustrations'

const Illustrations = () => {
  let illustrations = getIllustrations()

  return (
    <div className='card_container'>
      {illustrations.map((illustration) => (
        <article key={illustration.Title} className="card" >
          <img
            src={`/icons/illustrations/${illustration.Icon}`}
            alt={illustration.Title}
            loading='lazy' 
          />
          <h2>{illustration.Title}</h2>
          <p>{illustration.Description}</p>
          <a className='card_link' href={illustration.Link}>Visit Resource →</a>
        </article>
      ))}
    </div>
  )
}
export default Illustrations
