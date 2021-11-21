import React from "react";

export default {
  title: "Elements/Input",
};

const Template = (args) => <div {...args}>{args.text}</div>;

export const Image = Template.bind({});
Image.args = {};

export const Search = Template.bind({});
Search.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {};
