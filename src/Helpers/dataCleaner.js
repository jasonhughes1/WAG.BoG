
const dataCleaner = (data) => {
  const completePets = data.petfinder.pets.pet.map((dog => {
    return Object.assign({}, {
      name: dog.name.$t,
      breed: dog.breeds.breed.$t,
      sex: dog.sex.$t,
      photo: dog.media.photos.photo[3].$t,
      street: dog.contact.address1.$t,
      city: dog.contact.city.$t,
      state: dog.contact.state.$t,
      zip: dog.contact.zip.$t
    })
  }))
  return completePets;
}


export default dataCleaner;
