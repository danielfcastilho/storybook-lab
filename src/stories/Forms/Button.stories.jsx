import React from "react";
import Button from "@material-ui/core/Button";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

export default {
  title: "Form/Button",
  component: [Button, Tab],
  argTypes: {
    onClick: { action: "clicked" },
    color: {
      options: ["primary", "secondary", "tertiary"],
      type: "select",
      defaultValue: "primary",
    },
    variant: {
      options: ["text", "contained", "outlined"],
      type: "select",
      defaultValue: "contained",
    },
    text: {
      defaultValue: "Confirmar",
    },
  },
};

const Template = (args) => <Button {...args}>{args.text}</Button>;

export const Back = Template.bind({});
Back.args = {
  text: "Voltar",
  variant: "outlined",
  color: "tertiary",
};

export const Sort = Template.bind({});
Sort.args = {
  variant: "outlined",
};

export const Menu = Template.bind({});
Menu.decorators = [
  (Story) => (
    <Tabs value={0}>
      <Tab label="Personagens" />
      <Tab label="Episódios" />
    </Tabs>
  ),
];
