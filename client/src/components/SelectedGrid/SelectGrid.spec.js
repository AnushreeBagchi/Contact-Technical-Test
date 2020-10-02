import React from "react";
import { shallow } from "enzyme";
import SelectGrid from "./SelectGrid";

describe("Tests for Card", () => {
  it("Renders correctly", () => {
    const wrapper = shallow(
      <SelectGrid/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
