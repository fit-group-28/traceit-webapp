import { render, screen } from "@testing-library/react";
import Stock from "./stock.js";
import Enzyme, {shallow} from "enzyme"
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

test("renders the Stock page", () => {
  const wrapper = shallow(<Stock />)
  //assertion
  expect(wrapper.exists()).toBe(true);
  // const comp = wrapper.find("[data-test='type-input']")
  // comp.instance().value = "foo";
  const input = wrapper.find("input");
  input.simulate('focus');
  input.simulate('change', { target: { value: 'Changed' } });
    input.simulate('keyDown', {
      which: 27,
      target: {
        blur() {
          // Needed since <EditableText /> calls target.blur()
          input.simulate('blur');
        },
      },
    });
    console.log(input)
    // expect(wrapper.state().searchWord).toEqual('blur');;

  // content.simulate("change");

  // expect(wrapper.find('input[name="type-input"]')).toHaveLength(1);
    // expect(wrapper.find('input[name="hours"]')).toHaveLength(1);
    // expect(wrapper.find('select[name="jobTitle"]')).toHaveLength(1);


  // comp.instance().value = "Testing";
  // content.simulate("change");
  // expect(setState).toHaveBeenCalledWith("Testing");
});