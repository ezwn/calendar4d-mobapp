import React from "react";

import { VerticalBorderLayout } from "ezwn-ux-native/layouts/VerticalBorderLayout-cmp";
import { TitleBar } from "ezwn-ux-native/app-components/TitleBar-cmp";

export const EntryTypesRoot = () => {
  return (
    <VerticalBorderLayout
      top={
        <TitleBar
          text="Entry types"
          left={<TitleBar.SettingsButton />}
        />
      }
    >

    </VerticalBorderLayout>
  );
};
