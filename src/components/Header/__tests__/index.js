import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Header from '../../Header';

describe('<Header />', () => {
  it('renders a Header', () => {
    const wrapper = shallow(
      <Header />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('renders a Header with children', () => {
    const wrapper = shallow(
      <Header>
        <p>test!</p>
      </Header>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
