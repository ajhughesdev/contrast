const Newsletter = () => {
  return (
    <div className='newsletter_container'>
      <div className='newsletter'>
        <h3>Receive design resources every week. Straight to your inbox.</h3>
        <p>
          Discover dozens of design resources each week from educational
          material to illustrations.
        </p>
        <form>
          <input type='text' placeholder='john@example.com' />
          <button>Subscribe</button>
        </form>
        <p>*No spam, unsubscribe anytime.</p>
      </div>
    </div>
  )
}

export default Newsletter
