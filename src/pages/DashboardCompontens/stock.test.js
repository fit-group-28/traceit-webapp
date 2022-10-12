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
});