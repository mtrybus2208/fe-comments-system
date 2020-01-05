import React from 'React';
import { shallow } from 'enzyme';
import Main from './Main';
import { Route } from 'react-router';
import Authentication from '../../components/Authentication/Authentication';

describe('Main', () => {
  it('should render layout', () => {
    const wrapper = shallow(<Main />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correct Authenticated component on secured routes', () => {
    const wrapper = shallow(<Main />);
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});

    expect(pathMap['*']).toBe(Authentication);
  });
});
