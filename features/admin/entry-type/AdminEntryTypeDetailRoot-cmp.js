import React, { useState } from "react";
import { useParams } from "react-router";

import { VerticalBorderLayout } from "ezwn-ux-native/layouts/VerticalBorderLayout-cmp";
import { TitleBar } from "ezwn-ux-native/app-components/TitleBar-cmp";

import { useAdminEntryTypeRepository } from "features/admin/entry-type/AdminEntryTypeRepository-ctx";
import { CrudItemDetails } from "ezwn-react-native-generic-crud-feature/CrudItemDetails-cmp";

export const AdminEntryTypeDetailRoot = () => {
  const { id } = useParams();
  const [titleText, setTitleText] = useState("Entry type...");

  return (
    <VerticalBorderLayout
      top={<TitleBar text={titleText} left={<TitleBar.BackButton />} />}
    >
      <CrudItemDetails
        useRepository={useAdminEntryTypeRepository}
        structId="EntryType"
        labelProp="name"
        id={id}
        onNameChanged={setTitleText}
      />
    </VerticalBorderLayout>
  );
};
