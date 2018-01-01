import React from 'react';
import { shallow, mount } from 'enzyme';
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
    })
  });
