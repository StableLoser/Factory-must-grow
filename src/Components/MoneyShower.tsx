function MoneyShower({money, ironOre, ironPlate, className}: {
    money: number,
    ironOre: number,
    ironPlate: number,
    className?: string
}) {

    return <div className={className}>
        <output className={"m-2 p-2"}>You have {money} Euro</output>
        <output className={"m-2 p-2"}>You have {ironOre} Iron Ore</output>
        <output className={"m-2 p-2"}>You have {ironPlate} Iron Plate</output>
    </div>;

}

export default MoneyShower;