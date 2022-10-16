import { findByTestId, render, screen } from "@testing-library/react";
import Enzyme, {shallow} from "enzyme"
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import Home from "./home";

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

test("renders home without error", ()=>{
  const wrapper = shallow(<Home />)
  expect(wrapper.exists()).toBe(true);
})

const setup = () => {
  return shallow(<Home></Home>)
}

test("renders button", () => {
  const wrapper = shallow(<Home />)
  const ww = setup()
  const comp = wrapper.find("[data-test='supply-chain-card']")
  expect(comp.length).toBe(1)
});