import Header from './components/Header'
import Button from './components/Button'
import UsedBy from './components/UsedBy'
import ResourceList from './components/ResourceList'
import { Outlet } from 'react-router-dom'
import SortBy from './components/SortBy'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <h1>Design resources for developers.</h1>
      <p className='hero-p'>
        Explore a collection of 3400+ curated design resources, both free and
        paid, developers can use to create landing pages quicker.
      </p>
      <Button />
      <UsedBy />
      <div className='resources'>
        <ResourceList />
        <SortBy />
      </div>
      <Outlet />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
