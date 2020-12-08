import React, { useEffect, useRef, useState } from "react";

import { HorizontalLayout } from "ezwn-ux-native/layouts/HorizontalLayout-cmp";
import { View } from "react-native";
import { TextButton } from "ezwn-ux-native/app-components/TextButton-cmp";
import { ListItem } from "ezwn-ux-native/list/ListItem-cmp";
import * as Location from 'expo-location';
import { useSchema } from "shared/data-mng-lang/Schema-ctx";
import { generateEntyId, useCalendar } from "shared/calendar/Calendar-ctx";
import { useStorage } from "ezwn-storage-native/JSONAsyncStorage";
import { DurationOutput } from "ezwn-ux-native/forms/DurationOutput-cmp";

const getCurrentState = async (captureLocation) => {
  let location;

  if (captureLocation) {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
    }

    location = await Location.getCurrentPositionAsync({});
  }

  return {
    ...(location && location.coords || {}),
    time: new Date().getTime()
  };
}

export const Logger4d = ({ entryType, onUse }) => {
  const [startState, setStartState] = useStorage(
    `Logger4d#${entryType.name}`,
    () => null
  );

  const [duration, setDuration] = useState(null);

  const { schema: { spaces: { EntryTypeCategory: { values: entryTypeCategories } } } } = useSchema();
  const { addEntry } = useCalendar();

  const category = entryTypeCategories.find(cat => cat.id === entryType.category);

  const interval = useRef(null);

  useEffect(() => {
    if (startState && !interval.current) {
      interval.current = setInterval(updateTime(startState.time), 250);
    }

    return () => {
      clearInterval(interval.current);
      interval.current = null;
    };
  }, [startState, interval]);

  const updateTime = startTime => () => {
    const endTime = new Date();
    const dur = Math.round((endTime - startTime) / 1000.0);
    setDuration(dur);
  }

  const start = async () => {
    setStartState(await getCurrentState(false));
    onUse();
  }

  const record = async () => {
    const state = await getCurrentState(category.position !== "DISABLED");

    const duration = !startState ? undefined : Math.round((state.time - startState.time) / 1000.0);
    const time = startState && startState.time || state.time;

    addEntry({
      id: generateEntyId(),
      subject: "ME",
      type: entryType.id,
      time: new Date(time).toISOString().substring(0, 19),
      duration,
      latitude: state.latitude,
      longitude: state.longitude
    });

    setStartState(null);
    setDuration(null);

    onUse();
  };

  const onPress = category.duration === "REQUIRED" ? start : record;

  return <HorizontalLayout>
    <View style={{ flex: 1 }}>
      <ListItem.Title>{entryType.name}</ListItem.Title>
      <ListItem.SubTitle><DurationOutput value={duration} /></ListItem.SubTitle>
    </View>
    {!startState && <TextButton onPress={onPress}>
      Record
    </TextButton>}
    {startState && <TextButton alt={true} onPress={record}>
      Done
    </TextButton>}
  </HorizontalLayout>
};

Logger4d.defaultProps = {
  onUse: () => { }
}
