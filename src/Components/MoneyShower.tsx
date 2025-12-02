function MoneyShower({money, className}: { money: number, className?: string }) {

    return <div className={className}>
        <output className={"m-2 p-2"}>You have {money} Euro</output>
    </div>;

}

export default MoneyShower;