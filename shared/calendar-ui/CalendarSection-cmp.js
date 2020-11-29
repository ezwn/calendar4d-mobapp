import React from "react";
import { Text, View } from "react-native";
import { ListItem } from "ezwn-ux-native/list/ListItem-cmp";

export const CalendarSection = ({ title, children }) => <View style={{ marginTop: 20 }}>
    <ListItem><Text style={{ fontSize: 24 }}>{title}</Text></ListItem>
    {children}
</View>
