import React from 'react'

function ChildOneKardes(props) {

    const changeHandler = (e) => {
        props.inputGonder(e.target.value)
    } 
    return (
        <div>
            <input type="text" onChange = {changeHandler} />
            <p> {props.konu} </p>

        </div>
    )
}

export default ChildOneKardes
