import React from 'react'
import { Btn, Text } from "./style";

type Props = {
    title: string,
    status?: boolean,
    bg: string,
    color: string, 
    action?: () => void;
}

export default function Button({ title, action, status, bg, color } : Props) {
    return (
        <Btn onPress={action} disabled={status} style={{ backgroundColor: `${bg}` }}>
            <Text style={{ color: `${color}` }}>{title}</Text>
        </Btn>
    )
}