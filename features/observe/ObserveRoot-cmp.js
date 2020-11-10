import React from "react";

import { VerticalBorderLayout } from "ezwn-ux-native/layouts/VerticalBorderLayout-cmp";
import { TitleBar } from "ezwn-ux-native/app-components/TitleBar-cmp";
import { View } from "react-native";
import { useInputs } from "shared/inputs/Inputs-ctx";
import { useCalendar } from "shared/calendar/Calendar-ctx";
import { ListItem } from "ezwn-ux-native/list/ListItem-cmp";
import { Timer } from "ezwn-ux-native/time/Timer-cmp";
import { EventLogger } from "ezwn-ux-native/time/EventLogger-cmp";

export const ObserveRoot = ({ title, scope }) => {
  return (
    <VerticalBorderLayout
      top={
        <TitleBar
          text={title}
        />
      }
    >
      <InputList scope={scope} />
    </VerticalBorderLayout>
  );
};

const InputList = ({ scope }) => {
  const { inputs } = useInputs();

  return <View>
    {inputs.filter(input => input.scope === scope).map(input => <Input key={input.name} {...input} />)}
  </View>
};

const Input = (props) => {
  let component;
  switch (props.type) {
    case "timer":
      component = <ConnectedTimer {...props} />
      break;
    case "event-logger":
      component = <ConnectedEventLogger {...props} />
      break;
  }

  return <ListItem>
    {component}
  </ListItem>
};


const ConnectedTimer = (props) => {
  const { addEntry } = useCalendar();

  const save = ({ startTime, endTime, duration }) => addEntry(props.dataTemplate, {
    startTime: startTime.toISOString().substring(0, 19),
    endTime: endTime.toISOString().substring(0, 19),
    duration
  });

  return <Timer {...props} onDone={save} />
};

const ConnectedEventLogger = (props) => {
  const { addEntry } = useCalendar();

  const save = ({ time }) => addEntry(props.dataTemplate, {
    time: time.toISOString().substring(0, 19)
  });

  return <EventLogger {...props} onDone={save} />
};
