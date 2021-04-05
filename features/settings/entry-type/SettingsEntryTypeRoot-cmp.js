import React from "react";
import { View } from "react-native";

import { VerticalBorderLayout } from "ezwn-ux-native/layouts/VerticalBorderLayout-cmp";
import { HorizontalLayout } from "ezwn-ux-native/layouts/HorizontalLayout-cmp";
import { ListItem } from "ezwn-ux-native/list/ListItem-cmp";

import { CrudList } from "ezwn-react-native-generic-crud-feature/CrudList-cmp";

import { useSettingsEntryTypeRepository } from "./SettingsEntryTypeRepository-ctx";

export const SettingsEntryTypeRoot = () => {
  return (
    <VerticalBorderLayout>
      <CrudList
        routerLocation="/settings/entry-type"
        ItemContentComponent={EntryTypeListItem}
        useRepository={useSettingsEntryTypeRepository}
      />
    </VerticalBorderLayout>
  );
};

const EntryTypeListItem = ({ item }) => {
  return (
    <HorizontalLayout>
      <View style={{ flex: 1 }}>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.SubTitle>Details here...</ListItem.SubTitle>
      </View>
    </HorizontalLayout>
  );
};
