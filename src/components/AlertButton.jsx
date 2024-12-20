import React from 'react'

export default function AlertButton({ message, children }) {
    return (
        <button onClick={() => alert(message)}>{children}</button>
    )
}
