import React from "react";

import { VerticalBorderLayout } from "ezwn-ux-native/layouts/VerticalBorderLayout-cmp";
import { TitleBar } from "ezwn-ux-native/app-components/TitleBar-cmp";
import { History } from "./History-cmp";

export const HistoryRoot = () => {
  return (
    <VerticalBorderLayout
      top={
        <TitleBar
          text="History"
        />
      }
    >
      <History />
    </VerticalBorderLayout>
  );
};
