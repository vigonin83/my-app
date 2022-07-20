import React from "react"

const Counter = (props) => {
    const { value } = props

    const formatValue = () => {
        return value === 0 ? 'empty' : value
    }
    const getBadgeClasses = () => {
    let classes = "badge m-2 "
     return classes += value === 0 ? 'bg-warning' : 'bg-primary'
    } 
    
    return (
    <div>
        <span>{props.name}</span>
        <span className={getBadgeClasses()}>{formatValue()}</span>
        <button className="btn btn-primary m-2" onClick={() => {props.onClickIncrease(props.id)}}>+</button>
        <button className="btn btn-primary m-2" onClick={() => {props.onClickDecrease(props.id)}}>-</button>
        <button className="btn btn-danger btn-sm m-2" onClick={() => {props.onDelete(props.id)}}>Delete</button>
    </div> 
    )
}

export default Counter