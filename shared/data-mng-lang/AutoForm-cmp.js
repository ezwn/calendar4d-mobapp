import React from "react";

import { Text, View } from "react-native";
import { Padded } from "ezwn-ux-native/layouts/Padded-cmp";
import { TextInput } from "ezwn-ux-native/forms/TextInput-cmp";
import { NumberInput } from "ezwn-ux-native/forms/NumberInput-cmp";
import { Field } from "ezwn-ux-native/forms/Field-cmp";

export const AutoForm = ({ schema, data, updateDataProp }) => {
    const { structs } = schema;
    const { "@struct": structKey } = data;

    const struct = structs[structKey];
    const { props } = struct;

    return <View>
        {
            Object.keys(props).filter(key => !props[key].isId).map(key => <Field key={key}>
                <Text>{props[key].id}</Text>
                <AutoInput
                    onChange={value => updateDataProp(key, value)}
                    value={data[key]}
                    type={props[key].type.primitive}
                />
            </Field>)
        }
    </View>
}

const innerComponent = (type, onChange, value) => {
    // console.log(type, value, typeof value);

    switch (type) {
        case "int":
            return <NumberInput onChangeNumber={onChange} value={value} />
        default:
            return <TextInput
                onChangeText={onChange}
                value={value}
            />
    }
}

const AutoInput = ({ value, onChange, type }) => {
    return <>{
        innerComponent(type, onChange, value)
    }</>
}