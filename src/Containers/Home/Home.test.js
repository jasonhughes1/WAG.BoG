import React from 'react';
import { shallow, mount } from 'enzyme';
import { Home, mapStateToProps, mapDispatchToProps } from './Home';

describe('Home tests', () => {
  let home;
  beforeEach( () => {
    const mockFunc = jest.fn();
    home = shallow(
      <Home
        dispatch={mockFunc}
        dogs={['pups']}
        history={{key: 'value'}}
        location={{key: 'value'}}
        match={{key: 'value'}}
      />);
    });


    it.skip('should match the snapshot', () => {
      expect(home).toMatchSnapshot();
      });

    it.skip('Should be defined', () => {
      expect(home).toBeDefined();
    })
  });
