import dataCleaner from './dataCleaner';
import mockData from './mock-data.json';

describe('Helper Tests', () => {
  var cleaner;
  beforeEach(() => {
    cleaner = dataCleaner(mockData);
  });

  it('Should return an array of objects', () => {
    expect(Array.isArray(cleaner));
    expect(typeof cleaner === 'object');
  });

  it('should return an object with a name key', () => {
    const expectation = 'Charms';
    expect(cleaner[0].name).toEqual(expectation);
  });

  it('should return an object with a breed key', () => {
    const expectation = 'Labrador Retriever';
    expect(cleaner[0].breed).toEqual(expectation);
  });

  it('should return an object with a sex key', () => {
    const expectation = 'F';
    expect(cleaner[0].sex).toEqual(expectation);
  });

  it('should return an object with a photo key', () => {
    const expectation =                "http://photos.petfinder.com/photos/pets/39936980/1/?bust=1510898247&width=300&-pn.jpg";
    expect(cleaner[0].photo).toEqual(expectation);
  });
});
