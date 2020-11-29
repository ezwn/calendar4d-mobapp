import React from "react";
import { Route } from "react-router-native";

import { NavigationMenu } from "ezwn-ux-native/app-components/NavigationMenu-cmp";

import { StatsRootView } from "./StatsRootView-cmp";
import { FontAwesomeTextIcon } from "ezwn-ux-native/text-icons/FontAwsomeTextIcon-cmp";

export const id = "StatsFeature";

export const routes = <Route exact path="/" component={StatsRootView} />;

export const navigationMenuItems = (
  <NavigationMenu.Choice routerPush="/">
    <FontAwesomeTextIcon fontAwesomeIcon="faChartLine" text="Stats" />
  </NavigationMenu.Choice>
);
