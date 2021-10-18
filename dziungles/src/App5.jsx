import Clock from "./Components/Clock";


function App() {

    return (
        <div>
            <Clock clockTime={new Date().toLocaleTimeString()}/>
        </div>
    );

}

export default App;