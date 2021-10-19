import { useState } from "react";


function SelectNd() {

    const [value, setValue] = useState('2')

    const change = e => {
        setValue(e.target.value);
    }

    return (
        <>
            <div className="sq">
                <div className='formgroup'>
                    <label>Forma: </label>
                    <select onChange={change} value={value}>
                        <option value={1}>Circle</option>
                        <option value={2}>Square</option>
                        <option value={3}>Vertical line</option>
                        <option value={4}>Horizontal line</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default SelectNd;