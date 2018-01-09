import {fetchHelper} from './fetchHelper';


describe('dog API call', () => {
  beforeAll(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(
        {
          results: ['array', 'of', 'dogs']
        }
      )
    }));
  });

  it('should fetch dogs', async () => {
    const dogs = await fetchHelper.fetchDogs();
    expect(dogs).toEqual([{
      name: "Brooklyn",
      breed: "Great Dane",
      sex: "F",
      photo:"http://photos.petfinder.com/photos/pets/39762915/1/?bust=1509135347&width=300&-pn.jpg",
      street: "PO Box 280368",
      city: "Aurora",
      state: "CO",
      zip: "80163"
    }]);
  });
});
