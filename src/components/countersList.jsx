import React, {useState} from "react";
import Counter from './counter'

const CounterList = () => {
    const initialState = [        
        {id:0, value:0, name:'Ненужная вещь'}, 
        {id:1, value:4, name:'Ложка'}, 
        {id:2, value:0, name:'Вилка'},
        {id:3, value:0, name:'Тарелка'},
        {id:4, value:0, name:'Набор минималиста'}
    ]
   
    const [counters, setCounters] = useState(initialState)

    const handleDelete = (id) => {
        const newCounters = counters.filter((counter) => counter.id !== id)
        setCounters(newCounters)
    }

    const handleReset = () => {
        setCounters(initialState)
    }

    const handleIncrement = (id) => {
        let newCounterValues = counters.map((item) => {
            if(item.id === id) {
                return {...item, value: item.value + 1}
            }
            return item
        })

      setCounters(newCounterValues)

    }

    const handleDecrement = (id) => {
        let newCounterValues = counters.map((item) => {
            if(item.id === id) {
                return {...item, value: item.value - 1}
            }
            return item
        })
      setCounters(newCounterValues)
    }
  
    return ( 
    <>
    {counters.map((count) => <Counter key = {count.id} {...count} onDelete={handleDelete} onClickIncrease = {handleIncrement} onClickDecrease={handleDecrement}></Counter>)}
    <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
    </>
    )
}

export default CounterList