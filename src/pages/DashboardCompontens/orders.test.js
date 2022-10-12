import { render, screen } from "@testing-library/react";
import Sales from "./orders";
import Enzyme, {shallow} from "enzyme"
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

test("renders the orders page", () => {
  const wrapper = shallow(<Sales />)
  console.log(wrapper.debug)
  //assertion
  expect(wrapper.exists()).toBe(true);
  const form = wrapper.find('input');

});