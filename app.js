
let clickUpgrades = [
    {
        name: 'gardening gloves',
        id: 'gardenGlovesStat',
        price: 100,
        quantity: 0,
        multiplier: 1,
        cost: 1
    },
    {
        name: 'little shovel',
        id: 'littleShovelStat',
        price: 250,
        quantity: 0,
        multiplier: 20,
        cost: 20
    }
];

let automaticUpgrades = [
    {
        name: 'sunshine',
        id: 'sunshineStat',
        price: 500,
        quantity: 0,
        multiplier: 30,
        cost: 30
    },
    {
        name: 'ladybugs',
        id: 'ladybugsStat',
        price: 750,
        quantity: 0,
        multiplier: 50,
        cost: 50
    }
];

let flowers = 0;
let clickPower = 1;
let extraAutoClickPower = 0;

function digForFlowers() {
    if (clickPower == 0) {
        flowers++
    }
    flowers += clickPower
    drawScoreboard()
}

function buyUpgrade(clickUpgradeMultiplier) {
    if (flowers > clickUpgradeMultiplier) {
        clickPower += clickUpgradeMultiplier
        flowers -= clickUpgradeMultiplier
        drawClickUpgradeStats(clickUpgradeMultiplier)
        // priceOfUpgradeIncrease(clickUpgradeMultiplier)
    } else {
        window.alert('Keep on digging!')
        return
    }
}

function drawClickUpgradeStats(clickUpgradeMultiplier) {
    let foundUpgradeStat = clickUpgrades.find(clickUpgrade => clickUpgrade.multiplier == clickUpgradeMultiplier)
    priceOfUpgradeIncrease(foundUpgradeStat)
    foundUpgradeStat.quantity++
    console.log(foundUpgradeStat.quantity)
    document.getElementById(foundUpgradeStat.id).innerText = foundUpgradeStat.quantity
}

function priceOfUpgradeIncrease(foundUpgradeStat) {
    console.log('found upgrade stat', foundUpgradeStat, foundUpgradeStat.cost)
    foundUpgradeStat.cost *= 2
    drawScoreboard()
}

function buyAutoUpgrade(automaticUpgradeMultiplier) {
    if (flowers > automaticUpgradeMultiplier) {
        extraAutoClickPower += automaticUpgradeMultiplier
        flowers -= automaticUpgradeMultiplier
        drawAutoUpgradeStats(automaticUpgradeMultiplier)
        // priceOfAutoUpgradeIncrease(automaticUpgradeMultiplier)
    }
    else {
        window.alert('Keep on digging!')
        return
    }
    drawScoreboard()
}

function drawAutoUpgradeStats(automaticUpgradeMultiplier) {
    // console.log(automaticUpgradeMultiplier)
    let foundUpgradeStat = automaticUpgrades.find(automaticUpgrade => automaticUpgrade.multiplier == automaticUpgradeMultiplier)
    priceOfUpgradeIncrease(foundUpgradeStat)
    // console.log(foundUpgradeStat)
    foundUpgradeStat.quantity++
    document.getElementById(foundUpgradeStat.id).innerText = foundUpgradeStat.quantity
    // priceOfUpgradeIncrease(foundUpgradeStat)
}

function drawScoreboard() {
    document.getElementById('totalFlowers').innerText = flowers
    document.getElementById('clickPower').innerText = `+` + clickPower
    document.getElementById('autoClicksOnIncrement').innerText = `+` + extraAutoClickPower
    document.getElementById('gardeningGloveCost').innerText = clickUpgrades[0].cost
    document.getElementById('littleShovelCost').innerText = clickUpgrades[1].cost
    document.getElementById('sunshineCost').innerText = automaticUpgrades[0].cost
    document.getElementById('ladybugCost').innerText = automaticUpgrades[1].cost
}

function autoUpgradeClicks() {
    flowers += extraAutoClickPower
    drawScoreboard()
}

drawScoreboard()
setInterval(autoUpgradeClicks, 3000)