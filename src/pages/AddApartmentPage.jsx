/* 
API  https://ironbnb-m3.herokuapp.com
GET  /apartments
GET  /apartments/:id
POST /apartments
        {
          img: String,
          title: String,
          pricePerDay: Number
        }
*/

function AddApartmentPage() {
  return (
    <div className='AddApartmentPage'>
      <h3>Add New Apartment</h3>
    </div>
  )
}

export default AddApartmentPage
