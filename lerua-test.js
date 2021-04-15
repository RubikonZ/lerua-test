let item = {
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
            }
        },
    "stock": {
        "stocks": {
                "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
}

function getItemName(item) {
    return item.displayedName.displayedName.value
}

function getShopNumbers(item) {
    const regions = item.stock.stocks;
    return Object.keys(item.stock.stocks['34'])
    /* Убрал гибкое решение в случае необходимости строгого ответа
    let availabilityRegions = {};
    // Despite given test data, gonna assume that we have more than 1 region
    for (region in regions) {
            availability[region] = Object.keys(regions[region]);
        } 
    return availabilityRegions */
}

function getMaxAvailability(item) {
    const shops = item.stock.stocks['34'];
    console.log(shops);
    let shopMaxItems = Object.keys(shops).reduce((firstShop, secondShop) => {
        return Number(shops[firstShop]) > Number(shops[secondShop]) ? firstShop : secondShop
    })
    return [shopMaxItems, shops[shopMaxItems]]
}