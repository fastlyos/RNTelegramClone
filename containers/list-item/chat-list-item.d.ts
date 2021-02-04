import React from "react";
// import { ViewProps as RNViewProps } from "react-native";

interface ChatListItemProps {
  id: number;
  image: any;
  chatName: string;
  lastMessage: any;
  isMute: boolean;
  unreadCount: number;
  onPress: () => void;
}

declare const ChatListItem: (props: ChatListItemProps) => React.ReactNode;
export default ChatListItem;
