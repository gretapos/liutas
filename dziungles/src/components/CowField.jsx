import { useState } from "react";


function CowField({counterColor}) {

    const [counter, setCounter] = useState(0);

const addCow = () => {
    //console.log('Cow will be added soon')
    const newCounter = counter + 1;
    setCounter(newCounter);
}

const add10Cows = () => {
    const newCounter = counter + 10;
    setCounter(newCounter);
}

const goHome = () => {
    setCounter(0);
}

    return (
        <div className="cow-field">
            <div className="counter" style={{color:counterColor}}>0</div>
            <button onClick={addCow}>Add Cow</button>
            <button onClick={add10Cows}>Add 10 Cow</button>
            <button onClick={goHome}>Go Home</button>

        </div>
    )
}

export default CowField;
