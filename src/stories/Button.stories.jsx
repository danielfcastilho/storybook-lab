import React from "react";
import Button from "@material-ui/core/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    color: {
      options: ["primary", "secondary", "tertiary"],
      type: "select",
      defaultValue: "primary",
    },
    text: {
      defaultValue: "Confirmar",
    },
  },
};

const Template = (args) => <Button {...args}>{args.text}</Button>;

export const GoBack = Template.bind({});
GoBack.args = {
  text: "Voltar",
  variant: "contained",
  label: "Button",
};

export const ToggledOn = Template.bind({});
ToggledOn.args = {
  variant: "outlined",
  label: "Button",
};
