/* 
API  https://ironbnb-m3.herokuapp.com
GET  /apartments/:id
*/

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const FlatPage = () => {
  const { id } = useParams()

  const [flat, setFlat] = useState()

  const fetchFlat = async setter => {
    const response = await fetch(`https://ironbnb-m3.herokuapp.com/apartments/${id}`)
    const parsed = await response.json()

    setter(parsed)
  }

  useEffect(() => {
    fetchFlat(setFlat)
  }, [])

  useEffect(() => {
    console.log(flat)
  }, [flat])

  return flat ? (
    <>
      <img src={flat.img} />
      <h2>{flat.title}</h2>
      <p>Price per day: {flat.pricePerDay}</p>
    </>
  ) : (
    <h1>Loading...</h1>
  )
}

export default FlatPage
