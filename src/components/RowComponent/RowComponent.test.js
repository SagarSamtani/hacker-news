import React from "react";
import RowComponent from "./index";
import { expect } from "chai";
import { shallow } from "enzyme";

const mockRowValue = {
  title: "Y Combinator",
  url: "http://ycombinator.com",
  author: "pg",
  points: 57,
  story_text: null,
  comment_text: null,
  _tags: ["story"],
  num_comments: 2,
  objectID: "1",
  _highlightResult: {
    title: {
      value: "Y Combinator",
      matchLevel: "none",
      matchedWords: []
    },
    url: {
      value: "http://ycombinator.com",
      matchLevel: "none",
      matchedWords: []
    },
    author: {
      value: "<em>pg</em>",
      matchLevel: "full",
      matchedWords: ["pg"]
    }
  }
};

describe("<RowComponent />", () => {
  it("renders correctly", () => {
    const rowCompnent = shallow(<RowComponent rowValue={mockRowValue} />);
    expect(rowCompnent).to.have.lengthOf(1);
  });
  it("renders an `.upvotes-count`", () => {
    const wrapper = shallow(<RowComponent rowValue={mockRowValue} />);
    expect(wrapper.find(".upvotes-count")).to.have.lengthOf(1);
  });
});
