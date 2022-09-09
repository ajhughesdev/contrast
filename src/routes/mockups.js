import { getMockups } from '../api/mockups'

const Mockups = () => {
  let mockups = getMockups()

  return (
    <div className='card_container'>
      {mockups.map((mockup) => (
        <article key={mockup.Title} className="card">
          <img src={`/icons/mockups/${mockup.Icon}`} alt={mockup.Title} />
          <h2>{mockup.Title}</h2>
          <p>{mockup.Description}</p>
          <a className='card_link' href={mockup.Link}>
            Visit Resource →
          </a>
        </article>
      ))}
    </div>
  )
}
export default Mockups
