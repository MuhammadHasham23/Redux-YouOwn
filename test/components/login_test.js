import {renderComponent,expect} from '../test_helper';
import Login from '../../src/components/login.js';

describe('Login',()=>{
  let component;

  beforeEach(()=>{
    component = renderComponent(Login);
  });
  it('renders something', () => {
    expect(component).to.exist;
  });
  it('should have a input password',()=>{
  it('should have a input email',()=>{
    expect(component.find('input')).to.have.class('email');
  });
    expect(component.find('input')).to.have.class('password');
  });
  it('should have a sign in button',()=>{
    expect(component.find('button')).to.have.id('signin');
  });
});
describe('enters some text',()=>{
  let component;
  beforeEach(()=>{
    component = renderComponent(Login);
    component.find('input').simulate('change','new comment');
  });
 it('shows text that is entered',()=>{
    expect(component.find('input')).to.have.value('new comment');
  });
});
describe('submits some text',()=>{
  let component;
  beforeEach(()=>{
    component = renderComponent(Login);
    component.find('input').simulate('click','');
  });
  it('when submitted, clears the input bars',()=>{
    expect(component.find('input')).to.have.value('');
  });
});
