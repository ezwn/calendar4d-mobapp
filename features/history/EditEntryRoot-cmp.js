import React from "react";

import { VerticalBorderLayout } from "ezwn-ux-native/layouts/VerticalBorderLayout-cmp";
import { TitleBar } from "ezwn-ux-native/app-components/TitleBar-cmp";
import { useHistory, useParams } from "react-router";
import { useSchema } from "shared/data-mng-lang/Schema-ctx";
import { useCalendar } from "shared/calendar/Calendar-ctx";
import { AutoForm } from "shared/data-mng-lang/AutoForm-cmp";
import { ContextualMenu } from "ezwn-ux-native/app-components/ContextualMenu-cmp";
import { Padded } from "ezwn-ux-native/layouts/Padded-cmp";
import { TextButton } from "ezwn-ux-native/app-components/TextButton-cmp";

export const EditEntryRoot = () => {
  const history = useHistory();

  const { id } = useParams();
  const { entries, updateEntry, removeEntry } = useCalendar();
  const { schema } = useSchema();

  const entry = entries.find(o => o.id === id);

  const updateData = (valueMap) => {
    // console.log(valueMap);
    updateEntry(entry, valueMap);
  }

  const remove = () => {
    removeEntry(entry);
    history.goBack();
  }

  return (
    <VerticalBorderLayout
      top={
        <TitleBar
          left={<TitleBar.BackButton />}
          text={`Edit observation`}
        />
      }
      bottom={
        <ContextualMenu>
          <Padded>
            <TextButton onPress={remove}>
              Remove
            </TextButton>
          </Padded>
        </ContextualMenu>
      }
    >
      <AutoForm schema={schema} data={entry} updateData={updateData} structKey="Entry" />
    </VerticalBorderLayout>
  );
};
