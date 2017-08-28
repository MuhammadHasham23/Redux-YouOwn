import {renderComponent,expect} from '../test_helper';
import Home from '../../src/components/home.js';

describe('home',()=>{
    let component;
  beforeEach(()=>{
  component = renderComponent(Home);
  });
  it('should have a button to add recipe',()=>{
    expect(component.find('button')).to.exist;
  });
});
