import { useState } from 'react'

/* 
API  https://ironbnb-m3.herokuapp.com
GET  /apartments
GET  /apartments/:id
*/

function ApartmentsPage() {
  const [apartments, setApartments] = useState([])

  return (
    <div>
      <h3>List of apartments</h3>
    </div>
  )
}

export default ApartmentsPage
