import React from "react";
import Button from "@material-ui/core/Button";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";

export default {
  title: "Elements/Button",
  component: "Button",
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export const Back = (args) => <Button {...args}>{args.text}</Button>;
Back.args = {
  text: "Voltar",
  color: "primary",
  variant: "outlined",
};
Back.argTypes = {
  color: {
    options: ["primary", "secondary"],
    type: "select",
  },
  variant: {
    options: ["contained", "outlined"],
    type: "select",
  },
};

export const Sort = (args) => {
  const [alignment, setAlignment] = React.useState("desc");

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  return (
    <ToggleButtonGroup
      value={alignment}
      onChange={handleAlignment}
      exclusive
    >
      <ToggleButton backgroundColor="red" {...args} value="desc" key="desc">
        <ArrowDownward color="primary" />
      </ToggleButton>
      <ToggleButton {...args} value="asc" key="asc">
        <ArrowUpward color="primary" />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export const Menu = (args) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      TabIndicatorProps={{ style: { background: args.color } }}
    >
      <Tab value={0} label="Personagens" {...args} />
      <Tab value={1} label="Episódios" {...args} />
    </Tabs>
  );
};
Menu.args = {
  color: "#A93AE8",
};
