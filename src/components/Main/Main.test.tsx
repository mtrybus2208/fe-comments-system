import React from 'React';
import { shallow } from 'enzyme';
import Main from './Main';
import { Route } from 'react-router';
import Dashboard from '../../pages/Dashboard/Dashboard';

describe('Main', () => {
  it('should render layout', () => {
    const wrapper = shallow(<Dashboard />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correct dashboard route', () => {
    const wrapper = shallow(<Main />);
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});

    expect(pathMap['/dashboard']).toBe(Dashboard);
  });
});
