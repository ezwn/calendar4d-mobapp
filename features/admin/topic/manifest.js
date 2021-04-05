import React from "react";
import { Route } from "react-router-native";

import { TabMenu } from "ezwn-ux-native/app-components/TabMenu-cmp";
import { FontAwesomeTextIcon } from "ezwn-ux-native/text-icons/FontAwsomeTextIcon-cmp";

import { AdminTopicRoot } from "./AdminTopicRoot-cmp";
import { AdminTopicDetailRoot } from "./AdminTopicDetailRoot-cmp";
import { AdminTopicRepositoryProvider } from "./AdminTopicRepository-ctx";

export const id = "TopicCrudFeature";

export const routes = (
  <AdminTopicRepositoryProvider>
    <Route exact path="/admin/topic">
      <AdminTopicRoot />
    </Route>
    <Route exact path="/admin/topic/:id" component={AdminTopicDetailRoot} />
  </AdminTopicRepositoryProvider>
);

export const navigationMenuItems = (
  <TabMenu.Choice routerPush="/admin/topic">
    <FontAwesomeTextIcon fontAwesomeIcon="faMicroscope" text="Topics" />
  </TabMenu.Choice>
);
