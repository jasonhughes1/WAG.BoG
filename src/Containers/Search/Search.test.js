import React from 'react';
import { shallow } from 'enzyme';
import { Search, mapStateToProps, mapDispatchToProps } from './Search';

describe('Search tests', () => {
  let search;
  beforeEach( () => {
    const mockFunc = jest.fn();
    search = shallow(
      <Search
        dogs= {['pups']}
        history= {{key: 'value'}}
        location= {{key: 'value'}}
        match= {{key: 'value'}}
        searchCurrentDogs= {mockFunc}
        searchForDogs= {['pups']}
      />);
  });


  it('should match the snapshot', () => {
    expect(search).toMatchSnapshot();
  });

  it('Should be defined', () => {
    expect(search).toBeDefined();
  });
});

describe('map state to props', () => {
  it('should receive dogs from the store', () => {
    const mockStore = {
      dogs: [{name: 'Brooklyn'}]
    };
    const expected = mapStateToProps(mockStore);
    expect(expected.dogs).toEqual(mockStore.dogs);
  });

  it('should receive searchForDogs from the store', () => {
    const mockStore = {
      searchForDogs: []
    };
    const expected = mapStateToProps(mockStore);
    expect(expected.searchForDogs).toEqual(mockStore.searchForDogs);
  });
});

describe('mapDispatchToProps', () => {
  let mockDispatch;
  let result;

  beforeEach(() => {
    mockDispatch = jest.fn();
    result = mapDispatchToProps(mockDispatch);
  });

  it('should call dispatch when searchCurrentDogs is called', () => {
    result.searchCurrentDogs();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
