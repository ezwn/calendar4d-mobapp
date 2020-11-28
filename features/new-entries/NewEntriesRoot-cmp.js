import React from "react";

import { VerticalBorderLayout } from "ezwn-ux-native/layouts/VerticalBorderLayout-cmp";
import { TitleBar } from "ezwn-ux-native/app-components/TitleBar-cmp";
import { View } from "react-native";
import { ListItem } from "ezwn-ux-native/list/ListItem-cmp";
import { useSchema } from "shared/data-mng-lang/Schema-ctx";
import { Logger4d } from "./Logger4d-cmp";
import { useStorage } from "ezwn-storage-native/JSONAsyncStorage";

export const NewEntriesRoot = () => {
  return (
    <VerticalBorderLayout
      top={
        <TitleBar
          text="Create calendar entries..."
        />
      }
    >
      <EntryTypeList />
    </VerticalBorderLayout>
  );
};

const EntryTypeList = () => {
  const [lastUseMap, setLastUseMap] = useStorage(
    `EntryTypeList`,
    () => ({})
  );

  const { schema: { spaces: { EntryType: { values: entryTypes } } } } = useSchema();

  const sortedEntryTypes = entryTypes.sort((eT1, eT2) => {
    const eT1LastUse = lastUseMap[eT1.id];
    const eT2LastUse = lastUseMap[eT2.id];

    if (eT1LastUse===eT2LastUse) {
      return eT1.name === eT2.name ? 0 : eT1.name < eT2.name ? -1 : 1;
    }

    if (!eT1LastUse) {
      return 1;
    }

    if (!eT2LastUse) {
      return -1;
    }

    return eT1LastUse < eT2LastUse ? 1 : -1;
  });

  return <View>
    {sortedEntryTypes.map(entryType => <ListItem key={entryType.id}>
      <Logger4d entryType={entryType} onUse={() => setLastUseMap({
        ...lastUseMap,
        [entryType.id]: new Date().getTime()
      })} />
    </ListItem>)}
  </View>
};
