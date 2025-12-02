import './App.css'
import MoneyShower from "./Components/MoneyShower.tsx";
import {useState} from "react";
import Incremancer from "./Components/Incremancers.tsx";


function App() {
    const [money, setMoney] = useState<number>(0);


    function collect(value: number) {
        setMoney(money + value);
    }

    return <div className={"container"}>


        <MoneyShower className={"col money-shower text-center"} money={money}/>
        <Incremancer onCollect={collect} name={"Iron Ore"}/>
        <Incremancer onCollect={collect} name={"Iron Plate"}/>


    </div>;
}

export default App
