import { useState } from "react";

function TextNd() {

    const [color, setValue] = useState('')
    const [kiekis, setTvalue] = useState(0)

    const changeSpalva = e => {
        setValue(e.target.value);
    }

    const changeKiekis = e => {
        setTvalue(e.target.value);
    }

    return (
        <>
            <div className="sq">
                <div className='formgroup'>
                    <label>Spalva: </label>
                    <input onChange={changeSpalva} type="color" name="spalva" value={color} />    
                </div>
                <div className='formgroup'>
                    <label>Kiekis: </label>
                    <input onChange={changeKiekis} type="number" name="kiekis" min="0" value={kiekis} />    
                </div>
            </div>
        </>
    );
}

export default TextNd;