import React from 'react';
import { shallow } from 'enzyme';
import { Map, mapStateToProps } from './Map';

describe('Map tests', () => {
  let map;
  beforeEach( () => {
    const mockFunc = jest.fn();
    map = shallow(
      <Map
        dispatch={mockFunc}
        history={{key: 'value'}}
        location={['denver']}
        match={{key: 'value'}}
      />);
  });

  it('should match the snapshot', () => {
    expect(map).toMatchSnapshot();
  });

  it('Should be defined', () => {
    expect(map).toBeDefined();
  });
});

describe('map state to props', () => {
  it('should receive location from the store', () => {
    const mockStore = {
      location: []
    };
    const expected = mapStateToProps(mockStore);
    expect(expected.location).toEqual(mockStore.location);
  });
});
