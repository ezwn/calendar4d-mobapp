import React, { useState } from "react";

import { VerticalBorderLayout } from "ezwn-ux-native/layouts/VerticalBorderLayout-cmp";
import { TitleBar } from "ezwn-ux-native/app-components/TitleBar-cmp";
import { useHistory, useParams } from "react-router";
import { useSchema } from "ezwn-react-native-data-schema/Schema-ctx";
import { useCalendar } from "shared/calendar/Calendar-ctx";
import { StructForm } from "ezwn-react-native-data-schema/StructForm-cmp";
import { ContextualMenu } from "ezwn-ux-native/app-components/ContextualMenu-cmp";
import { Padded } from "ezwn-ux-native/layouts/Padded-cmp";
import { TextButton } from "ezwn-ux-native/app-components/TextButton-cmp";

export const EditEntryRoot = () => {
  const history = useHistory();

  const { id } = useParams();
  const { entries, updateEntry, removeEntry } = useCalendar();
  const { schema } = useSchema();
  const [valid, setValid] = useState(false);

  const entry = entries.find((o) => o.id === id);

  const updateData = (valueMap) => {
    // console.log(valueMap);
    updateEntry(entry, valueMap);
  };

  const remove = () => {
    removeEntry(entry);
    history.goBack();
  };

  return (
    <VerticalBorderLayout
      top={
        <TitleBar left={<TitleBar.BackButton />} text={`Edit observation`} />
      }
      bottom={
        <ContextualMenu>
          <Padded>
            <TextButton onPress={remove}>Remove</TextButton>
          </Padded>
        </ContextualMenu>
      }
    >
      <StructForm
        struct={schema.structs["Entry"]}
        data={entry}
        updateData={updateData}
        onValidityChange={setValid}
      />
    </VerticalBorderLayout>
  );
};
