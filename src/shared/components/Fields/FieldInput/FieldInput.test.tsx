import React from 'React';
import { shallow } from 'enzyme';

import FieldInput from './FieldInput';

describe('FieldInput', () => {
  it('should render layout', () => {
    const wrapper = shallow(<FieldInput />);

    expect(wrapper).toMatchSnapshot();
  });
});
