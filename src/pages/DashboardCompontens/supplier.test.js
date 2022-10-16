import { render, screen } from "@testing-library/react";
import Enzyme, {shallow} from "enzyme"
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import Supplier from "./supplier";

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

test("renders without error", ()=>{
  const wrapper = shallow(<Supplier />)
  const comp = wrapper.find("[data-test='component-supplier']")
  expect(wrapper.exists()).toBe(true);
  expect(comp.length).toBe(1);
})

test("renders non-empty the supplier page", () => {
  const wrapper = shallow(<Supplier />)
  console.log(wrapper.debug)
  //assertion
  const form = wrapper.find('#feedback-search');
  // when
  form.props().onChange({target: {
    value: 'aaa'
 }});
 // then
//  expect(wrapper.state('#feedback-search')).toBeDefined();
});