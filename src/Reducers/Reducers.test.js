import * as actions from '../Actions/Actions';
import { dogs, location } from './Reducers';

describe('Reducer Tests', () => {

  it('should return the default store', () => {
   const expected = []
   expect(dogs(undefined, {})).toEqual(expected)
  });
});

  it('should return a new state with dogs added', () => {
    const dogs = [{name: "Charms",
                    breed: "Labrador Retriever",
                    sex: "F",
                    photo: "http://photos.petfinder.com/photos/pets/39936980/1/?bust=1510898247&width=300&-pn.jpg"}];

    const expected = [...dogs]
    expect(dogs(undefined, actions.getDogs(dogs))).toEqual(expected)
    })
