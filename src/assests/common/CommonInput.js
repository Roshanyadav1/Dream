import { Input } from '@ui-kitten/components'
import React from 'react'

export default function CommonInput({
    style,
    label,
    placeholderTextColor,
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    accessoryRight,
}
) {
    return (
        <Input
            style={[{ borderBottomColor: 'blue', ...style }]}
            value={value}
            label={label}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            accessoryRight={accessoryRight}
            placeholderTextColor={placeholderTextColor}
            onChangeText={onChangeText}
        />
    )
}
