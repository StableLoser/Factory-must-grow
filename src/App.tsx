import "./App.css";
import MoneyShower from "./Components/MoneyShower.tsx";
import { useState } from "react";
import Incremancer from "./Components/Incremancers.tsx";

function App() {
  const [money, setMoney] = useState<number>(1000);

  function collect(value: number) {
    setMoney(money + value);
  }

  function cost(cost: number) {
    if (money > 0) {
      setMoney(money - cost);
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className={"container"}>
      <MoneyShower className={"col money-shower text-center"} money={money} />
      <Incremancer onCollect={collect} onCost={cost} name={"Iron Ore"} />
      <Incremancer onCollect={collect} onCost={cost} name={"Iron Plate"} />
      <Incremancer onCollect={collect} onCost={cost} name={"Iron Gear"} />
    </div>
  );
}

export default App;
