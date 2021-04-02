import React from "react";
import { View } from "react-native";

import { VerticalBorderLayout } from "ezwn-ux-native/layouts/VerticalBorderLayout-cmp";
import { HorizontalLayout } from "ezwn-ux-native/layouts/HorizontalLayout-cmp";
import { ListItem } from "ezwn-ux-native/list/ListItem-cmp";

import { CrudList } from "ezwn-react-native-generic-crud-feature/CrudList-cmp";
import { useAdminEntryTypeRepository } from "features/admin/entry-type/AdminEntryTypeRepository-ctx";

export const AdminEntryTypeRoot = () => {
  return (
    <VerticalBorderLayout>
      <CrudList
        routerLocation="/admin/entry-type"
        ItemContentComponent={EntryTypeListItem}
        useRepository={useAdminEntryTypeRepository}
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
