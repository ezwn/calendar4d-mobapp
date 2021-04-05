import React from "react";
import { View } from "react-native";

import { VerticalBorderLayout } from "ezwn-ux-native/layouts/VerticalBorderLayout-cmp";
import { HorizontalLayout } from "ezwn-ux-native/layouts/HorizontalLayout-cmp";
import { ListItem } from "ezwn-ux-native/list/ListItem-cmp";
import { StructList } from "ezwn-react-native-data-schema/StructList-cmp";

import { useAdminEntryTypeRepository } from "./AdminEntryTypeRepository-ctx";

export const AdminEntryTypeRoot = () => {
  const repository = useAdminEntryTypeRepository();

  return (
    <VerticalBorderLayout>
      <StructList
        routerLocation="/admin/entry-type"
        ItemContentComponent={EntryTypeListItem}
        repository={repository}
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
