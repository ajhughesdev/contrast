import Header from './components/Header'
import Button from './components/Button'
import UsedBy from './components/UsedBy'
import ResourceList from './components/ResourceList'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <h1>Design resources for developers.</h1>
      <p className='hero-p'>
        Explore a collection of 3400+ curated design resources, both free and
        paid, developers can use to create landing pages quicker.
      </p>
      <Button />
      <UsedBy />
      <ResourceList />
      <Outlet />
    </>
  )
}

export default App
