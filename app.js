
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
    } else {
        window.alert('Keep on digging!')
        return
    }

    drawScoreboard()
}

function buyAutoUpgrade(automaticUpgradeMultiplier) {
    if (flowers > automaticUpgradeMultiplier) {
        extraAutoClickPower += automaticUpgradeMultiplier
        flowers -= automaticUpgradeMultiplier
        drawAutoUpgradeStats(automaticUpgradeMultiplier)
    }
    else {
        window.alert('Keep on digging!')
        return
    }
    drawScoreboard()
}

function drawClickUpgradeStats(clickUpgradeMultiplier) {
    let foundUpgradeStat = clickUpgrades.find(clickUpgrade => clickUpgrade.multiplier == clickUpgradeMultiplier)
    foundUpgradeStat.quantity++
    console.log(foundUpgradeStat.quantity)
    document.getElementById(foundUpgradeStat.id).innerText = foundUpgradeStat.quantity
    priceOfUpgradeIncrease(foundUpgradeStat)
}

function drawAutoUpgradeStats(automaticUpgradeMultiplier) {
    // console.log(automaticUpgradeMultiplier)
    let foundUpgradeStat = automaticUpgrades.find(automaticUpgrade => automaticUpgrade.multiplier == automaticUpgradeMultiplier)
    // console.log(foundUpgradeStat)
    foundUpgradeStat.quantity++
    document.getElementById(foundUpgradeStat.id).innerText = foundUpgradeStat.quantity
    priceOfUpgradeIncrease(foundUpgradeStat)
}






function priceOfUpgradeIncrease(foundUpgradeStat) {
    foundUpgradeStat.cost *= 2
    console.log(foundUpgradeStat)
}


function drawScoreboard() {
    document.getElementById('totalFlowers').innerText = flowers
    document.getElementById('clickPower').innerText = clickPower
    document.getElementById('autoClicksOnIncrement').innerText = extraAutoClickPower
}

function autoUpgradeClicks() {
    flowers += extraAutoClickPower
    drawScoreboard()
}

setInterval(autoUpgradeClicks, 3000)