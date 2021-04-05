import React from "react";
import { View } from "react-native";

import { VerticalBorderLayout } from "ezwn-ux-native/layouts/VerticalBorderLayout-cmp";
import { HorizontalLayout } from "ezwn-ux-native/layouts/HorizontalLayout-cmp";
import { ListItem } from "ezwn-ux-native/list/ListItem-cmp";
import { StructList } from "ezwn-react-native-data-schema/StructList-cmp";

import { useSettingsTopicRepository } from "./SettingsTopicRepository-ctx";

export const SettingsTopicRoot = () => {
  const repository = useSettingsTopicRepository();

  return (
    <VerticalBorderLayout>
      <StructList
        routerLocation="/settings/topic"
        ItemContentComponent={TopicListItem}
        repository={repository}
      />
    </VerticalBorderLayout>
  );
};

const TopicListItem = ({ item }) => {
  return (
    <HorizontalLayout>
      <View style={{ flex: 1 }}>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.SubTitle>Details here...</ListItem.SubTitle>
      </View>
    </HorizontalLayout>
  );
};
