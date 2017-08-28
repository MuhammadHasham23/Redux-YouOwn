import { renderComponent , expect } from '../test_helper';
import Dashboard from '../../src/components/dashboard';

describe('Dashboard' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Dashboard);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
  it('has likes',()=>{
    expect(component.find('.likes')).to.exist;
  });
  it('has comments',()=>{
    expect(component.find('.comments')).to.exist;
  });
  it('has savedUrl',()=>{
    expect(component.find('.likes')).to.exist;
  });
});
