/* 
API  https://ironbnb-m3.herokuapp.com
POST /apartments
        {
          img: String,
          title: String,
          pricePerDay: Number
        }
*/

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddApartmentPage() {
  const navigate = useNavigate()

  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const [pricePerDay, setPricePerDay] = useState(0)

  const handleSubmit = async event => {
    event.preventDefault()
    const response = await fetch('https://ironbnb-m3.herokuapp.com/apartments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ img: image, title, pricePerDay }),
    })
    const parsed = await response.json()
    console.log(parsed)
    navigate(`/apartments/${parsed._id}`)
  }

  return (
    <div className='AddApartmentPage'>
      <h3>Add New Apartment</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Image <input value={image} onChange={event => setImage(event.target.value)} />
        </label>
        <label>
          Title <input value={title} onChange={event => setTitle(event.target.value)} />
        </label>
        <label>
          Price per day{' '}
          <input
            type='number'
            value={pricePerDay}
            onChange={event => setPricePerDay(event.target.value)}
          />
        </label>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddApartmentPage
