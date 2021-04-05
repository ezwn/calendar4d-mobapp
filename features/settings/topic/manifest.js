import React from "react";
import { Route } from "react-router-native";

import { TabMenu } from "ezwn-ux-native/app-components/TabMenu-cmp";
import { FontAwesomeTextIcon } from "ezwn-ux-native/text-icons/FontAwsomeTextIcon-cmp";

import { SettingsTopicRoot } from "./SettingsTopicRoot-cmp";
import { SettingsTopicDetailRoot } from "./SettingsTopicDetailRoot-cmp";
import { SettingsTopicRepositoryProvider } from "./SettingsTopicRepository-ctx";

export const id = "UserTopicFeature";

export const routes = (
  <SettingsTopicRepositoryProvider>
    <Route exact path="/settings/topic">
      <SettingsTopicRoot />
    </Route>
    <Route
      exact
      path="/settings/topic/:id"
      component={SettingsTopicDetailRoot}
    />
  </SettingsTopicRepositoryProvider>
);

export const navigationMenuItems = (
  <TabMenu.Choice routerPush="/settings/topic">
    <FontAwesomeTextIcon fontAwesomeIcon="faMicroscope" text="Topics" />
  </TabMenu.Choice>
);
