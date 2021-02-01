import React from "react";
import { View } from "react-native";

import { VerticalBorderLayout } from "ezwn-ux-native/layouts/VerticalBorderLayout-cmp";
import { TitleBar } from "ezwn-ux-native/app-components/TitleBar-cmp";
import { HorizontalLayout } from "ezwn-ux-native/layouts/HorizontalLayout-cmp";
import { ListItem } from "ezwn-ux-native/list/ListItem-cmp";

import { CrudList } from "ezwn-react-native-generic-crud-feature/CrudList-cmp";
import { useEntryTypeCrudRepository } from "shared/entry-type/EntryTypeCrudRepository-ctx";

export const EntryTypeCrudRoot = () => {

  return (
    <VerticalBorderLayout
      top={
        <TitleBar
          text="Entry types"
        />
      }
    >
      <CrudList
        routerLocation="/entry-type/crud"
        ItemContentComponent={EntryTypeListItem}
        useRepository={useEntryTypeCrudRepository}
      />
    </VerticalBorderLayout>
  );
};

const EntryTypeListItem = ({ item }) => {
  return <HorizontalLayout>
    <View style={{ flex: 1 }}>
      <ListItem.Title>{item.name}</ListItem.Title>
      <ListItem.SubTitle>Details here...</ListItem.SubTitle>
    </View>
  </HorizontalLayout>
};
