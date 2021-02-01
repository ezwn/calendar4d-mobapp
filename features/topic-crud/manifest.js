import React from "react";
import { Route } from "react-router-native";

import { NavigationMenu } from "ezwn-ux-native/app-components/NavigationMenu-cmp";
import { FontAwesomeTextIcon } from "ezwn-ux-native/text-icons/FontAwsomeTextIcon-cmp";

import { TopicCrudRoot } from "./TopicCrudRoot-cmp";
import { TopicCrudDetailRoot } from "./TopicCrudDetailRoot-cmp";
import { TopicCrudRepositoryProvider } from "shared/topic/TopicCrudRepository-ctx";

export const id = "TopicCrudFeature";

export const routes = (
  <TopicCrudRepositoryProvider>
    <Route exact path="/topic/crud">
      <TopicCrudRoot />
    </Route>
    <Route exact path="/topic/crud/:id" component={TopicCrudDetailRoot} />
  </TopicCrudRepositoryProvider>
);

export const navigationMenuItems = (
  <NavigationMenu.Choice routerPush="/topic/crud">
    <FontAwesomeTextIcon fontAwesomeIcon="faMicroscope" text="Topics" />
  </NavigationMenu.Choice>
);
