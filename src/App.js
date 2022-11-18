import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import ApartmentsPage from './pages/ApartmentsPage'
import AddApartmentPage from './pages/AddApartmentPage'
import FlatPage from './pages/FlatPage'

function App() {
  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path='/' element={<ApartmentsPage />} />
        <Route path='/apartments/new' element={<AddApartmentPage />} />
        <Route path='/apartments/:id' element={<FlatPage />} />
      </Routes>
    </div>
  )
}

export default App
