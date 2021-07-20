import React from 'react'

const TopRight = (props) => {
    return (
        <div>
            <h1>
                {
                isNaN(props.id) ? `The word is ${props.id}!!!` : `The number is ${props.id}!!!`
            }
            </h1>
        </div>
    )
}

export default TopRight