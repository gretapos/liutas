

function CowField({counterColor}) {

const addCow = () => {
    console.log('Cow will be added soon')
}

    return (
        <div className="cow-field">
            <div className="counter" style={{color:counterColor}}>0</div>
            <button onClick={addCow}>Add Cow</button>

        </div>
    )
}

export default CowField;
