import { useState } from "react";

function OneAnimal({ fieldAnimal, goHome, addWeight, addDate }) {

    const [weight, setWeight] = useState('');
    const [date, setDate] = useState('');

    const handleWeight = e => {
        setWeight(e.target.value);
    }

    const submitWeight = () => {
        addWeight(fieldAnimal.id, weight)
        setWeight('');
    }

    const submitDate = () => {
        addDate(fieldAnimal.id, date)
        setDate('');
    }

    const handleDate = e => {
        console.log(e.target.value);
        setDate(e.target.value);
    }

    return (
        <>
            <h2>No.:{fieldAnimal.id} Weight: {fieldAnimal.weight} Date: {fieldAnimal.date} </h2>
            <input type="text" onChange={handleWeight} value={weight} />
            <input type="date" onChange={handleDate} value={date} />
            <button onClick={submitWeight}>Add weight</button>
            <button onClick={submitDate}>Add Date</button>
            <button onClick={() => goHome(fieldAnimal.id)}>Go home</button>
        </>
    );

}

export default OneAnimal;