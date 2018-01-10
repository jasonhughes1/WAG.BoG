import React from 'react';
import { shallow } from 'enzyme';
import { Home, mapStateToProps } from './Home';

describe('Home tests', () => {
  let home;
  beforeEach( () => {
    const mockFunc = jest.fn();
    home = shallow(
      <Home
        dispatch={mockFunc}
        dogs={[['pups']]}
        history={{key: 'value'}}
        location={{key: 'value'}}
        match={{key: 'value'}}
      />);
  });


  it('should match the snapshot', () => {
    expect(home).toMatchSnapshot();
  });

  it('Should be defined', () => {
    expect(home).toBeDefined();
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
});
