function Animals({animal}) {
    if ('cow' === animal) {
        return (
            <div className="cow">
            </div>
        );
    } else if ('sheep' === animal) {
        return (
            <div className="sheep">
            </div>
        );
    } else if ('horse' === animal) {
        return (
            <div className="horse">
            </div>
        );
    }
    else {
        return null;
    }
}

export default Animals;