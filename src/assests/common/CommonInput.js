import { Input } from '@ui-kitten/components'
import React from 'react'

export default function CommonInput({
    errors,
    style,
    label,
    placeholderTextColor,
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    accessoryRight,
    caption,
    disabled,
}) {
    const getBorderBottomColor = () => {
        if (errors) {
            return 'red'
        }
    }

    return (
        <Input
            style={[{ borderBottomColor: (getBorderBottomColor()), ...style }]}
            value={value}
            label={label}
            disabled={disabled}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            accessoryRight={accessoryRight}
            caption={caption}
            placeholderTextColor={placeholderTextColor}
            onChangeText={onChangeText}
        />
    )
}
