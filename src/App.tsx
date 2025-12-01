import './App.css'
import MoneyShower from "./Components/MoneyShower.tsx";
import {useState} from "react";
import Incremancer from "./Components/Incremancers.tsx";


function App() {
    const [money, setMoney] = useState<number>(0);


    function collect() {
        setMoney(money + 10);
    }

    return <div className={"app"}>
        <MoneyShower money={money}/>
        <Incremancer collect={collect}/>
    </div>;
}

export default App
