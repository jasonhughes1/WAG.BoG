import React from 'react';
import { shallow } from 'enzyme';
import { Search } from './Search';

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
