import React, { useState } from "react";
import { useParams } from "react-router";

import { VerticalBorderLayout } from "ezwn-ux-native/layouts/VerticalBorderLayout-cmp";
import { TitleBar } from "ezwn-ux-native/app-components/TitleBar-cmp";
import { StructAdvancedForm } from "ezwn-react-native-data-schema/StructAdvancedForm-cmp";
import { useFindByIdInSpace } from "ezwn-react-native-data-schema/hooks/useFindByIdInSpace";
import { useSearchInSpace } from "ezwn-react-native-data-schema/hooks/useSearchInSpace";

import { useSettingsEntryTypeRepository } from "./SettingsEntryTypeRepository-ctx";

export const SettingsEntryTypeDetailRoot = () => {
  const { id } = useParams();
  const [titleText, setTitleText] = useState("Entry type...");
  const repository = useSettingsEntryTypeRepository();

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
      <StructAdvancedForm
        repository={repository}
        structId="EntryType"
        labelProp="name"
        id={id}
        onNameChanged={setTitleText}
        clientMap={clientMap}
      />
    </VerticalBorderLayout>
  );
};
