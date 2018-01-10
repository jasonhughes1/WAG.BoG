import {fetchDogs, searchDogs, postLocation} from './fetchHelper';

const mockData = {
  name: "Brooklyn",
  breed: "Great Dane",
  sex: "F",
  photo:"http://photos.petfinder.com/photos/pets/39762915/1/?bust=1509135347&width=300&-pn.jpg",
  street: "PO Box 280368",
  city: "Aurora",
  state: "CO",
  zip: "80163"
};

window.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    status: 200,
    json: () => Promise.resolve(mockData)
  })
);

describe('fetchDogs tests', () => {

  it('should be called correctly', () => {
    expect(fetchDogs).toBeAFunction;
  });

  it('should return an object', async () => {
    const response = await fetchDogs();

    expect(typeof response).toEqual('object');
  });

  it('should throw an error if fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 500
      })
    );
    const response = await fetchDogs();
    const expected = Error('Fetch Failed!');

    expect(response).toEqual(expected);
  });
});

describe('postLocation tests', () => {

  it('should be called correctly', () => {
    expect(postLocation).toBeAFunction;
  });

  it('should dispatch an object', async () => {
    const response = await postLocation();

    expect(typeof response).toEqual('function');
  });
});

describe('Search tests', () => {

  it('should be called correctly', () => {
    expect(searchDogs).toBeAFunction;
  });

  it('should return an object', async () => {
    const response = await fetchDogs();

    expect(typeof response).toEqual('object');
  });

  it('should throw an error if fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 500
      })
    );
    const response = await searchDogs();
    const expected = Error('Fetch Failed!');

    expect(response).toEqual(expected);
  });
});
