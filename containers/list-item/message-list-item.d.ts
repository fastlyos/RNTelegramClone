import React from "react";
// import { ViewProps as RNViewProps } from "react-native";

interface MessageListItemProps {
  data: any;
}

declare const MessageListItem: (props: MessageListItemProps) => React.ReactNode;
export default MessageListItem;
