import {useState} from "react";


function Counter({name, speed, className}: { speed: number, className?: string, name: string }) {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    setTimeout(increment, speed);

    return <div className={className}>
        <output>You have {count} {name}</output>
    </div>;
}

export default Counter;