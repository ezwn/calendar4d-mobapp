import React, { useState } from "react";
import { useParams } from "react-router";

import { VerticalBorderLayout } from "ezwn-ux-native/layouts/VerticalBorderLayout-cmp";
import { TitleBar } from "ezwn-ux-native/app-components/TitleBar-cmp";

import { CrudItemDetails } from "ezwn-react-native-generic-crud-feature/CrudItemDetails-cmp";

import { useSettingsEntryTypeRepository } from "./SettingsEntryTypeRepository-ctx";
import { useFindByIdInSpace } from "ezwn-react-native-data-mng-lang/hooks/useFindByIdInSpace";
import { useSearchInSpace } from "ezwn-react-native-data-mng-lang/hooks/useSearchInSpace";

export const SettingsEntryTypeDetailRoot = () => {
  const { id } = useParams();
  const [titleText, setTitleText] = useState("Entry type...");

  const resolve = useFindByIdInSpace("EntryTypeClass", "id");
  const byWordSearch = useSearchInSpace("EntryTypeClass", "id", "name");

  const clientMap = {
    EntryTypeClass: {
      resolveLabel: async (id) => (await resolve(id))["name"],
      byWordSearch: byWordSearch
    }
  };

  return (
    <VerticalBorderLayout
      top={<TitleBar text={titleText} left={<TitleBar.BackButton />} />}
    >
      <CrudItemDetails
        useRepository={useSettingsEntryTypeRepository}
        structId="EntryType"
        labelProp="name"
        id={id}
        onNameChanged={setTitleText}
        clientMap={clientMap}
      />
    </VerticalBorderLayout>
  );
};
