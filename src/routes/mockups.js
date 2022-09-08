import { getMockups } from '../api/mockups'

const Mockups = () => {
  let mockups = getMockups()

  return (
    <>
      {mockups.map((mockup) => (
        <article key={mockup.Title}>
          <img src={`/icons/mockups/${mockup.Icon}`} alt={mockup.Title} />
          <h2>{mockup.Title}</h2>
          <p>{mockup.Description}</p>
          <a href={mockup.Link}>Visit Resource →</a>
        </article>
      ))}
    </>
  )
}
export default Mockups
