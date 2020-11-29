import React from "react";

import { VerticalBorderLayout } from "ezwn-ux-native/layouts/VerticalBorderLayout-cmp";
import { TitleBar } from "ezwn-ux-native/app-components/TitleBar-cmp";
import { useCalendar } from "shared/calendar/Calendar-ctx";
import { useSchema } from "shared/data-mng-lang/Schema-ctx";
import { DurationOutput } from "ezwn-ux-native/forms/DurationOutput-cmp";
import { ListItem } from "ezwn-ux-native/list/ListItem-cmp";
import { daysAgo, toRelativeDate } from "shared/dates";
import { CalendarSection } from "shared/calendar-ui/CalendarSection-cmp";

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

  return <CalendarSection title={toRelativeDate(isoDate)}>
    <ListItem>
      <ListItem.SubTitle>Physical training duration: <DurationOutput value={duration || 0} /></ListItem.SubTitle>
    </ListItem>
    <ListItem>
      <ListItem.SubTitle>Energy spent: {Math.round(energy)}</ListItem.SubTitle>
    </ListItem>
  </CalendarSection>;
}

