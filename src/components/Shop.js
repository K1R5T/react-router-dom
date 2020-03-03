import React from 'react'

export default function Shop(props) {
    return (
        <div>
            <h1>Shop component</h1>
            <p>add item to basket</p>
            <button onClick={props.add}>Add</button>
        </div>
    )
}
