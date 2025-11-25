import './App.css'
import Counter from "./Components/Counter.tsx";
import {useState} from "react";

function App() {
    const [upgradeLevel, setUpgradeLevel] = useState<number>(1)

    function upgrade() {
        if (upgradeLevel > 0.1) {
            setUpgradeLevel(Math.round((upgradeLevel - 0.1) * 100) / 100);
        }
    }

    return <> <Counter upgradeLevel={upgradeLevel}/>
        <button onClick={upgrade}>Upgrade</button>
    </>;
}

export default App
