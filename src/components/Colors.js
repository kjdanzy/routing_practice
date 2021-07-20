import React from 'react'

const Colors = (props) => {

    return (
        <h1 style={{ color: props.color, backgroundColor: props.bc }}>
            The secret word or name "{props.id}" was passed in along with
            the font color of "{props.color}" and the background color "{props.bc}".
        </h1>
    )
}

export default Colors