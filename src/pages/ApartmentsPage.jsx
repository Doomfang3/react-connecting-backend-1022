import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

/* 
API  https://ironbnb-m3.herokuapp.com
GET  /apartments
*/

function ApartmentsPage() {
  const [apartments, setApartments] = useState([])

  /** GET all the apartments
   * @param setter Setter Function
   */
  const fetchApartments = async setter => {
    const response = await fetch('https://ironbnb-m3.herokuapp.com/apartments')
    // Parse the response with .json() !Promise
    const parsed = await response.json()
    console.log(parsed)
    // Pass the final value to our setter
    setter(parsed)
  }

  useEffect(() => {
    // fetchApartments().then(data => console.log(data))
    // At mounting time (indicated byt the empty dependency array on the useEffect []), we're gonna fetch our data
    fetchApartments(setApartments)
  }, [])

  return (
    <div>
      <h3>List of apartments</h3>
      {apartments.map(({ _id, img, title, pricePerDay }) => (
        <div key={_id}>
          <img src={img} />
          <h2>{title}</h2>
          <p>Price per day: {pricePerDay}</p>
          <Link to={`/apartments/${_id}` /* Dynamic id */}>To the Listing</Link>
        </div>
      ))}
    </div>
  )
}

export default ApartmentsPage
