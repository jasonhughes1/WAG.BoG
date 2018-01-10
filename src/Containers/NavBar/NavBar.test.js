import React from 'react';
import { shallow } from 'enzyme';
import { NavBar, mapStateToProps, mapDispatchToProps } from './NavBar';

describe('NavBar tests', () => {
  let navbar;
  beforeEach( () => {
    const mockFunc = jest.fn();
    navbar = shallow(
      <NavBar
        dogs={['pups']}
        getAllDogs={mockFunc}
        getCurrentLocation={mockFunc}
        history={{key: 'value'}}
        location={['location']}
        match={{key: 'value'}}
      />);
  });

  it('should match the snapshot', () => {
    expect(navbar).toMatchSnapshot();
  });

  it('Should be defined', () => {
    expect(navbar).toBeDefined();
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

  it('should receive location from the store', () => {
    const mockStore = {
      location: []
    };
    const expected = mapStateToProps(mockStore);
    expect(expected.location).toEqual(mockStore.location);
  });
});

describe('mapDispatchToProps', () => {
  let mockDispatch;
  let result;

  beforeEach(() => {
    mockDispatch = jest.fn();
    result = mapDispatchToProps(mockDispatch);
  });

  it('should call dispatch when getAllDogs is called', () => {
    result.getAllDogs();
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('should call dispatch when getCurrentLocation is called', () => {
    result.getCurrentLocation();
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('should call dispatch when getSearchDogs is called', () => {
    result.getSearchDogs();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
