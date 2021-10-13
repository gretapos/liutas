function Circle({ ls, circleColor, circleNumber }) {

    return (
        <>
            <div className="circle">
                <span style={{
                background: circleColor,
                width: '300px',
                height: '300px',
                borderRadius: '300px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                }}>This is circle {circleNumber}</span>
        </div>
        </>
    )
}

export default Circle;