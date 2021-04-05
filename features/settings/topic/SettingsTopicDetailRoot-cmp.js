import React, { useState } from "react";
import { useParams } from "react-router";

import { VerticalBorderLayout } from "ezwn-ux-native/layouts/VerticalBorderLayout-cmp";
import { TitleBar } from "ezwn-ux-native/app-components/TitleBar-cmp";

import { CrudItemDetails } from "ezwn-react-native-generic-crud-feature/CrudItemDetails-cmp";

import { useSettingsTopicRepository } from "./SettingsTopicRepository-ctx";

export const SettingsTopicDetailRoot = () => {
  const { id } = useParams();
  const [titleText, setTitleText] = useState("Topic...");

  return (
    <VerticalBorderLayout
      top={<TitleBar text={titleText} left={<TitleBar.BackButton />} />}
    >
      <CrudItemDetails
        useRepository={useSettingsTopicRepository}
        structId="Topic"
        labelProp="name"
        id={id}
        onNameChanged={setTitleText}
      />
    </VerticalBorderLayout>
  );
};
