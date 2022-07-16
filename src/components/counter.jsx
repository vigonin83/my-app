import React, {useState} from "react"

const Counter = (props) => {

    const [value, setValue] = useState(props.value)

    const formatValue = () => {
        return value === 0 ? 'empty' : value
    }
    const getBadgeClasses = () => {
    let classes = "badge m-2 "
     return classes += value === 0 ? 'bg-warning' : 'bg-primary'
    } 

    const handleIncrement = () => {
        setValue((prevState) => prevState + 1)
    }
    const handleDicrement = () => {
        setValue((prevState) => prevState - 1)
    }
    
    return (
    <div>
        <span className={getBadgeClasses()}>{formatValue()}</span>
        <button className="btn btn-primary m-2" onClick={handleIncrement}>+</button>
        <button className="btn btn-primary m-2" onClick={handleDicrement}>-</button>
    </div> 
    )
}

export default Counter