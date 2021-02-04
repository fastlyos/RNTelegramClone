import React from "react";
// import { ViewProps as RNViewProps } from "react-native";

interface ContactListItemProps {
  id: number;
  avatar: any;
  chatName: string;
  lastMessage: any;
  isMute: boolean;
  unreadCount: number;
  onPress: () => void;
  avatar;
  type;
  firstName: string;
  lastName: string;
  status: "online" | undefined;
  lastSeen: Date;
  navigation: any;
}

declare const ContactListItem: (props: ContactListItemProps) => React.ReactNode;
export default ContactListItem;
