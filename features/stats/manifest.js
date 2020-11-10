import React from "react";
import { Route } from "react-router-native";

import { NavigationMenu } from "ezwn-ux-native/app-components/NavigationMenu-cmp";
import { ChartLineTextIcon } from "ezwn-ux-native/text-icons/ChartLineTextIcon-cmp";

import { StatsRootView } from "./StatsRootView-cmp";

export const id = "StatsFeature";

export const routes = <Route exact path="/" component={StatsRootView} />;

export const navigationMenuItems = (
  <NavigationMenu.Choice routerPush="/">
    <ChartLineTextIcon text="Stats" />
  </NavigationMenu.Choice>
);
