import React from "react";

import { VerticalBorderLayout } from "ezwn-ux-native/layouts/VerticalBorderLayout-cmp";
import { TitleBar } from "ezwn-ux-native/app-components/TitleBar-cmp";

export const TopicsRoot = () => {
  return (
    <VerticalBorderLayout
      top={
        <TitleBar
          text="Topics"
          left={<TitleBar.SettingsButton />}
        />
      }
    >

    </VerticalBorderLayout>
  );
};
