import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import React from 'React';
import ShallowRenderer from 'react-test-renderer/shallow';
import Main from './Main';
import { Route } from 'react-router';
import Dashboard from '../../pages/Dashboard/Dashboard';
describe('Main', () => {
  const props = {};

  //   it('renders correct routes', () => {
  //     const wrapper = shallow(<Main />);
  //     const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
  //       const routeProps = route.props();
  //       pathMap[routeProps.path] = routeProps.component;
  //       return pathMap;
  //     }, {});
  //     // { 'nurse/authorization' : NurseAuthorization, ... }

  //     expect(pathMap['dashboard']).toBe(Dashboard);
  //   });

  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find('.test')).to.have.lengthOf(1);
  });
});
