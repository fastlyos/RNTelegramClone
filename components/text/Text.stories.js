//
import React from "react";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import CenterView from "@app/components/center-view/center-view";

import Text from "./text";

storiesOf("Text", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("with text", () => <Text type={"h1"}>{"Hello Button"}</Text>);
