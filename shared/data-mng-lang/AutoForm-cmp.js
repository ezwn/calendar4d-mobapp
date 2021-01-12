import React from "react";

import { Text, View } from "react-native";
import { TextInput } from "ezwn-ux-native/forms/TextInput-cmp";
import { NumberInput } from "ezwn-ux-native/forms/NumberInput-cmp";
import { Field } from "ezwn-ux-native/forms/Field-cmp";
import { DateTimeInput } from "ezwn-ux-native/forms/DateTimeInput-cmp";
import { DurationInput } from "ezwn-ux-native/forms/DurationInput-cmp";

export const AutoForm = ({ schema, data, updateData, structKey }) => {
    const { structs } = schema;

    const struct = structs[structKey];
    const { props } = struct;

    const modificationTime = Object.keys(props).filter(key => props[key].isModificationTime);

    const onChange = (key, value) => {
        const meta = modificationTime ? { [modificationTime]: new Date().toISOString().substring(0, 19) } : {};
        updateData({ ...meta, [key]: value });
    };

    return <View>
        {
            Object.keys(props).filter(key => !props[key].isId && !props[key].isModificationTime && !props[key].isDeletedFlag).map(key => <Field key={key}>
                <Text>{props[key].id}</Text>
                <AutoInput
                    onChange={value => onChange(key, value)}
                    value={data[key]}
                    type={props[key].type}
                />
            </Field>)
        }
    </View>
}

const innerComponent = (type, onChange, value) => {
    // console.log(type, value, typeof value);

    switch (type.primitive) {
        case "int":
        case "decimal":
            return <NumberInput onChangeNumber={onChange} value={value} />
        case "datetime":
            return <DateTimeInput
                onChange={onChange}
                value={value}
            />
        case "duration":
            return <DurationInput
                onChange={onChange}
                value={value}
            />
        case "text":
            const multiline = !type.size;

            return <TextInput
                onChange={onChange}
                value={value}
                multiline={multiline}
                height={multiline ? 80 : undefined}
            />
        default:
            return <TextInput
                onChange={onChange}
                value={value}
            />;
    }
}

const AutoInput = ({ value, onChange, type }) => {
    return <>{
        innerComponent(type, onChange, value)
    }</>
}