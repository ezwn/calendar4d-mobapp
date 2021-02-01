import React, { useState } from "react";
import { useParams } from "react-router";

import { VerticalBorderLayout } from "ezwn-ux-native/layouts/VerticalBorderLayout-cmp";
import { TitleBar } from "ezwn-ux-native/app-components/TitleBar-cmp";

import { useEntryTypeCrudRepository } from "shared/entry-type/EntryTypeCrudRepository-ctx";
import { CrudItemDetails } from "ezwn-react-native-generic-crud-feature/CrudItemDetails-cmp";

export const EntryTypeCrudDetailRoot = () => {
  const { id } = useParams();
  const [titleText, setTitleText] = useState("Entry type...");

  return (
    <VerticalBorderLayout
      top={
        <TitleBar
          text={titleText}
          left={<TitleBar.BackButton />}
        />
      }
    >
      <CrudItemDetails
        useRepository={useEntryTypeCrudRepository}
        structId="EntryType"
        labelProp="name"
        id={id}
        onNameChanged={setTitleText}
      />
    </VerticalBorderLayout>
  );
};
