import React from 'react';
import { shallow } from 'enzyme';
import { Card, mapStateToProps, mapDispatchToProps} from './Card';

describe('Card tests', () => {
  let card;

  beforeEach( () => {
    const mockFunc = jest.fn();
    card = shallow(<Card
      addFavorites={mockFunc}
      breed={'lab'}
      city= {'denver'}
      clearFavorites={mockFunc}
      favorites={['favs']}
      name={'brooklyn'}
      picture={'dogfinder.jpg'}
      sex={'M'}
      state={'Colorado'}
      zip={'80223'}
      street={'colfax'}
    />);
  });

  it('should be defined', () => {
    expect(card).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(card).toMatchSnapshot();
  });
});

describe('map state to props', () => {
  it('should receive favorites from the store', () => {
    const mockStore = {
      favorites: []
    };
    const expected = mapStateToProps(mockStore);
    expect(expected.favorites).toEqual(mockStore.favorites);
  });
});

describe('mapDispatchToProps', () => {
  let mockDispatch;
  let result;

  beforeEach(() => {
    mockDispatch = jest.fn();
    result = mapDispatchToProps(mockDispatch);
  });

  it('should call dispatch when addFavorites is called', () => {
    result.addFavorites();
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('should call dispatch when clearFavorites is called', () => {
    result.clearFavorites();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
