import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card tests', () => {
  let card;

  beforeEach( () => {
    card = shallow(<Card />);
  });

  it('should be defined', () => {
    expect(card).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(card).toMatchSnapshot();
  });
});
