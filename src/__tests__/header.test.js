import React from "react";
import testRenderer from "react-test-renderer";
import MainHeader from "../components/heading/MainHeader";

describe("Given the MainHeader component", () => {
  it("should render correctly", () => {
    const tree = testRenderer.create(<MainHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
