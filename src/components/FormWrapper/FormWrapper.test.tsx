import React from 'react';
import { shallow } from 'enzyme';

import FormWrapper from './FormWrapper';

describe('ResetPassword', () => {
  it('should render layout', () => {
    const wrapper = shallow(
      <FormWrapper name="foo">
        <span>bar</span>
      </FormWrapper>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
