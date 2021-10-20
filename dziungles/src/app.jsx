import { useState } from "react";
import Animals from "./Components/Animals";


function App() {

    const [animal, setAnimal] = useState([])
    const [field, setField] = useState('left')

    const addAnimal = (a) => {
        const animalCopy = animal.slice();
        animalCopy.push({ animal: a, field: field });
        setAnimal(animalCopy);
    }

    const showField = (f) => {
        setField(f);
    }

    return (
        <>
            <div>
                <div className="field">
                    <div className='left-field'>
                        {animal.map((e, ind) => {
                            if (e.field === 'left')
                                return (<Animals key={ind} animal={e.animal} />);
                            return '';
                        }
                        )}
                    </div>
                    <div className="right-field">
                        {animal.map((e, ind) => {
                            if (e.field === 'right')
                                return (<Animals key={ind} animal={e.animal} />);
                            return '';
                        }
                        )}
                    </div>

                    <div>
                        <div className="field-buttons">
                            <button onClick={() => showField('left')}>Left</button>
                            <button onClick={() => showField('right')}>Right</button>
                        </div>
                        <button onClick={() => addAnimal('cow')}>Add cow</button>
                        <button onClick={() => addAnimal('sheep')}>Add sheep</button>
                        <button onClick={() => addAnimal('horse')}>Add horse</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;