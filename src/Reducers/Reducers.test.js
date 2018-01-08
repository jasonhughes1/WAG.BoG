import * as actions from '../Actions/Actions';
import { dogsReducer, locationReducer, favorites } from './Reducers';

describe('Reducer Tests', () => {

  it('should return the default store', () => {
   const expected = []
   expect(dogsReducer(undefined, {})).toEqual(expected)
  });
});

  it('should return a new state with dogs added', () => {
    const dogs = [{name: "Charms",
                    breed: "Labrador Retriever",
                    sex: "F",
                    photo: "http://photos.petfinder.com/photos/pets/39936980/1/?bust=1510898247&width=300&-pn.jpg"}];

    const expected = [dogs]
    expect(dogsReducer(undefined, actions.fetchDogSuccess(dogs))).toEqual(expected)
    })


  it('should return a new state with location added', () => {
    const location = {
                      lat: 39.700784399999996,
                      lng: -105.00314569999999
                    }

    const expected = [location]
    expect(locationReducer(undefined, actions.fetchLocationSuccess(location))).toEqual(expected)
    })


  it('should return a new state, with a favorite', () => {
  const favorite = [{name: "Charms",
                  breed: "Labrador Retriever",
                  sex: "F",
                  photo: "http://photos.petfinder.com/photos/pets/39936980/1/?bust=1510898247&width=300&-pn.jpg"}];

  const expected = [favorite]
  expect(favorites(undefined, actions.addFavorites(favorite))).toEqual(expected)
})

  it('should return a new state, with a favorite', () => {
  const favorite = [{name: "Charms",
                  breed: "Labrador Retriever",
                  sex: "F",
                  photo: "http://photos.petfinder.com/photos/pets/39936980/1/?bust=1510898247&width=300&-pn.jpg"}];

  const expected = [favorite]
  expect(favorites(undefined, actions.addFavorites(favorite))).toEqual(expected)
})

  it('should return a new state, with favorites removed', () => {
  const favorite = [{name: "Charms",
                  breed: "Labrador Retriever",
                  sex: "F",
                  photo: "http://photos.petfinder.com/photos/pets/39936980/1/?bust=1510898247&width=300&-pn.jpg"}];

  const expected = []
  expect(favorites(undefined, actions.removeFavorites(favorite))).toEqual(expected)
})
