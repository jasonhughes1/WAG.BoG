import fetchHelper from './fetchHelper';
import mockData from './mockData';


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
    expect(dogs).toEqual([

  });
})
