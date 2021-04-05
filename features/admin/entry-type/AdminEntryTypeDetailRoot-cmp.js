import React, { useState } from "react";
import { useParams } from "react-router";

import { VerticalBorderLayout } from "ezwn-ux-native/layouts/VerticalBorderLayout-cmp";
import { TitleBar } from "ezwn-ux-native/app-components/TitleBar-cmp";
import { StructAdvancedForm } from "ezwn-react-native-data-schema/StructAdvancedForm-cmp";

import { useAdminEntryTypeRepository } from "./AdminEntryTypeRepository-ctx";

export const AdminEntryTypeDetailRoot = () => {
  const { id } = useParams();
  const [titleText, setTitleText] = useState("Entry type...");
  const repository = useAdminEntryTypeRepository();

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
        showOwner={true}
      />
    </VerticalBorderLayout>
  );
};
