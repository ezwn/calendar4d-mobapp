import React from "react";
import { Text, View } from "react-native";
import { useCalendar } from "shared/calendar/Calendar-ctx";
import { useHistory } from "react-router";
import { DurationOutput } from "ezwn-ux-native/forms/DurationOutput-cmp";
import { ListItem } from "ezwn-ux-native/list/ListItem-cmp";
import { DatetimeOutput } from "ezwn-ux-native/forms/DateTimeOutput-cmp";

export const History = () => {
    const { entries } = useCalendar();
    return <View>{entries.reverse().map(obs => <Entry key={obs.id} entry={obs} />)}</View>;
}

const Entry = ({ entry: { id, type, time, duration } }) => {
    const history = useHistory();

    return <ListItem onPress={() => history.push(`/history/${id}`)}>
        <ListItem.Title><DatetimeOutput value={time} /></ListItem.Title>
        <ListItem.SubTitle>{type}</ListItem.SubTitle>
        <ListItem.SubTitle><DurationOutput value={duration} /></ListItem.SubTitle>
    </ListItem>;
}