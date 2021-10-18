import { useState } from "react";


function Apskritimai() {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);


    const prideti1 = () => {
        setCounter1(counter1 + 1);
    }

    const pridetiPriePirmo = () => {
        setCounter2(counter2 + counter1)
    }

    const reset = () => {
        setCounter1(0);
        setCounter2(0);
    }

    return (
        <>
            <div className='apskritimai'>
                <div className='apskritimaiContainer'>
                    <div className='apskritimas'>
                        <div className='counter'>{counter1}</div>
                    </div>
                    <div className='apskritimasButton'>
                        <button className='btn' onClick={() => prideti1()}>Prideti 1</button>
                    </div>
                </div>
                <div className='apskritimaiContainer'>
                    <div className='apskritimas'>
                        <div className='counter'>{counter2}</div>
                    </div>
                    <div className='apskritimasButton'>
                        <button className='btn' onClick={() => pridetiPriePirmo()}>Prideti pirmo skaiciu</button>
                        <button className='btn' onClick={() => reset(0)}>Nunulinti</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Apskritimai;