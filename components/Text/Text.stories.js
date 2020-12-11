import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import Text from "./text";
import CenterView from "@app/components/center-view/center-view";

storiesOf("Text", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("with text", () => <Text type={"h1"}>{"Hello Button"}</Text>);
