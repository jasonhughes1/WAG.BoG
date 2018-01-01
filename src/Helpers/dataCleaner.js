
const dataCleaner = (data) => {
  const completePets = data.petfinder.pets.pet.map((dog => {
    return Object.assign({}, {
      name: dog.name.$t,
      breed: dog.breeds.breed.$t,
      sex: dog.sex.$t,
      photo: dog.media.photos.photo[3].$t,
      street: dog.contact.address1,
      city: dog.contact.city,
      state: dog.contact.state
    })
  }))
  return completePets;
}


export default dataCleaner;
