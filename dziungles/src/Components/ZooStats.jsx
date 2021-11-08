function ZooStats({stats, groupStats}) {


    return (
        <div className="zoo__stats">
            <div className="zoo__stats__stat">
                <span><i>Animals Count:</i> <b>{stats.count}</b></span>
                <span><i>Animals Weight:</i> <b>{stats.weight.toFixed(2)} kg</b></span>
                <span><i>Animals Average Weight:</i> <b>{stats.average.toPrecision(5)} kg</b></span>
            </div>
            <div className="zoo__stats__gstat">
                {
                    groupStats.map(s => <span key={s.type}><i>{s.type}</i> <b>{s.count}</b></span>)
                }
            </div>
        </div>
    )
}

export default ZooStats;