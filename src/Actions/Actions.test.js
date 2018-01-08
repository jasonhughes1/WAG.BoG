import * as actions from './Actions';

describe('Action Tests', () => {

  it('Should have a type of LOCATION_SUCCESS', () => {
    const location = {
      lat: 39.700784399999996,
      lng: -105.00314569999999
    };

    const expected = {
      type: 'LOCATION_SUCCESS',
      location
    };
    expect(actions.fetchLocationSuccess(location)).toEqual(expected);
  });


  it('Should have a type of FETCHDOGSUCCESS', () => {
    const dogs = {
      name: "Charms",
      breed: "Labrador Retriever",
      sex: "F",
      photo: "http://photos.petfinder.com/photos/pets/39936980/1/?bust=1510898247&width=300&-pn.jpg"
    };

    const expected = {
      type: 'DOG_SUCCESS',
      dogs
    };
    expect(actions.fetchDogSuccess(dogs)).toEqual(expected);
  });

  it('Should have a type of ADD_FAVORITES', () => {
    const favorites = {
      name: "Charms",
      breed: "Labrador Retriever",
      sex: "F",
      photo: "http://photos.petfinder.com/photos/pets/39936980/1/?bust=1510898247&width=300&-pn.jpg"
    };

    const expected = {
      type: 'ADD_FAVORITES',
      favorites
    };
    expect(actions.addFavorites(favorites)).toEqual(expected);
  });

  it('Should have a type of REMOVE_FAVORITES', () => {
  
    const expected = {
      type: 'REMOVE_FAVORITES'
    };
    expect(actions.removeFavorites()).toEqual(expected);
  });
});
