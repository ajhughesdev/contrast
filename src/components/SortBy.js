const SortBy = () => {
  return (
    <form id='form-select'>
      <div class='select-inner'>
        <select>
          <option value=''>Sort by</option>
          <option value='A-Z'>A-Z</option>
          <option value='Z-A'>Z-A</option>
          <option value='popular'>Popular</option>
        </select>
        <svg
          width='11'
          height='6'
          viewBox='0 0 11 6'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M1 0.75L5.5 5.25L10 0.75' stroke='#595959' />
        </svg>
      </div>
    </form>
  )
}

export default SortBy
