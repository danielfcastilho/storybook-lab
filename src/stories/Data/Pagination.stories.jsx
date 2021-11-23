import React from "react";
import Pagination from "@material-ui/lab/Pagination";

export default {
  title: "Data/Pagination",
};

const Template = (args) => <Pagination {...args}>{args.text}</Pagination>;

export const Default = Template.bind({});
Default.args = {
  count: 10,
};
