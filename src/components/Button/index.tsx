import React from 'react'
import { Btn, Text } from "./style";

type Props = {
    title: string,
    action: () => void;
}

export default function Button({ title, action } : Props) {
    return (
        <Btn onPress={action}>
            <Text>{ title }</Text>
        </Btn>
    )
}