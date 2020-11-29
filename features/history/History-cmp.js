import React from "react";
import { Text, View } from "react-native";
import { useCalendar } from "shared/calendar/Calendar-ctx";
import { useHistory } from "react-router";
import { DurationOutput } from "ezwn-ux-native/forms/DurationOutput-cmp";
import { ListItem } from "ezwn-ux-native/list/ListItem-cmp";
import { TimeOutput } from "ezwn-ux-native/forms/TimeOutput-cmp";
import { CalendarSection } from "shared/calendar-ui/CalendarSection-cmp";
import { toRelativeDate } from "shared/dates";

export const History = () => {
    const { entries } = useCalendar();

    const days = [...new Set(entries.map(e => e.time.substring(0, 10)))].sort().reverse();

    return <View>{
        days.map(day => <CalendarSection key={day} title={toRelativeDate(day)}>
            {entries.filter(e => e.time.startsWith(day)).sort((e1, e2) => {
                const d1 = new Date(e1.time);
                const d2 = new Date(e2.time);

                return d2.getTime() - d1.getTime();
            }).map(obs => <Entry key={obs.id} entry={obs} />)}
        </CalendarSection>
        )
    }</View>;
}

const Entry = ({ entry: { id, type, time, duration } }) => {
    const history = useHistory();

    return <ListItem onPress={() => history.push(`/history/${id}`)}>
        <ListItem.Title><TimeOutput value={time} />
            {duration && (<>, <DurationOutput value={duration} /></>)}
        </ListItem.Title>
        <ListItem.SubTitle>{type}</ListItem.SubTitle>
    </ListItem>;
}
