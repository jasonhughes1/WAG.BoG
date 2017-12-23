
const helpers = (data) => {
  const completePets = data.petfinder.pets.pet.map((dog => {
    return Object.assign({}, {
      name: dog.name.$t,
      breed: dog.breeds.breed.$t,
      sex: dog.sex.$t,
      photo: dog.media.photos.photo[3].$t
    })
  }))
  return completePets;
}


export default helpers;
