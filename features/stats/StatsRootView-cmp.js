import React from "react";

import { VerticalBorderLayout } from "ezwn-ux-native/layouts/VerticalBorderLayout-cmp";
import { TitleBar } from "ezwn-ux-native/app-components/TitleBar-cmp";
import { External } from "ezwn-react-app/External-cmp";
import { useCalendar } from "shared/calendar/Calendar-ctx";
import { useSchema } from "shared/data-mng-lang/Schema-ctx";
import { DurationOutput } from "ezwn-ux-native/forms/DurationOutput-cmp";
import { ListItem } from "ezwn-ux-native/list/ListItem-cmp";

const daysAgo = (days) => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString().substring(0, 10)
};

export const StatsRootView = () => {

  return (
    <VerticalBorderLayout
      top={
        <TitleBar
          text="Stats"
        />
      }
    >
      <DayStats isoDate={daysAgo(0)} />
      <DayStats isoDate={daysAgo(1)} />
      <DayStats isoDate={daysAgo(2)} />
    </VerticalBorderLayout>
  );
};

const DailyDate = ({ isoDate }) => {

  let dateStr;
  switch (isoDate) {
    case daysAgo(0):
      dateStr = "Today";
      break;
    case daysAgo(1):
      dateStr = "Yesterday";
      break;
    case daysAgo(2):
      dateStr = "Two days ago";
      break;
    default:
      dateStr = isoDate;
      break;
  }

  return <>{dateStr}</>;
}

export const DayStats = ({ isoDate }) => {
  const { entries } = useCalendar();
  const { schema: { spaces: { EntryType: { values: entryTypes }, PhysicalActivity: { values: physicalActivities } } } } = useSchema();

  const typedEntries = entries
    .filter(entry => entry.time.startsWith(isoDate))
    .map(entry => ({
      entry,
      type: entryTypes.find(a => a.id === entry.type)
    }))
    .filter(typedEntry => typedEntry.type.category === "PHYSICAL_ACTIVITY");

  const duration = typedEntries.reduce((accu, typedEntry) => accu + typedEntry.entry.duration, 0);
  const energy = typedEntries.reduce((accu, typedEntry) =>
    accu + typedEntry.entry.duration / 3600 * physicalActivities.find(physicalActivity => physicalActivity.id === typedEntry.type.physicalActivity).energy, 0);

  return <ListItem>
    <ListItem.Title><DailyDate isoDate={isoDate} /></ListItem.Title>
    <ListItem.SubTitle>Duration: <DurationOutput value={duration} /></ListItem.SubTitle>
    <ListItem.SubTitle>Energy: {Math.round(energy)}</ListItem.SubTitle>
  </ListItem>;
}

