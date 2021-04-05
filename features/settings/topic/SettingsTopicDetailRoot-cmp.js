import React, { useState } from "react";
import { useParams } from "react-router";

import { VerticalBorderLayout } from "ezwn-ux-native/layouts/VerticalBorderLayout-cmp";
import { TitleBar } from "ezwn-ux-native/app-components/TitleBar-cmp";
import { StructAdvancedForm } from "ezwn-react-native-data-schema/StructAdvancedForm-cmp";

import { useSettingsTopicRepository } from "./SettingsTopicRepository-ctx";

export const SettingsTopicDetailRoot = () => {
  const { id } = useParams();
  const [titleText, setTitleText] = useState("Topic...");
  const repository = useSettingsTopicRepository();

  return (
    <VerticalBorderLayout
      top={<TitleBar text={titleText} left={<TitleBar.BackButton />} />}
    >
      <StructAdvancedForm
        repository={repository}
        structId="Topic"
        labelProp="name"
        id={id}
        onNameChanged={setTitleText}
      />
    </VerticalBorderLayout>
  );
};
