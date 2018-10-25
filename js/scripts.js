const games = document.getElementById('game-container');

const gameDiv = games.children;
const buyMulti = document.getElementById('MultiButtons');
const buyMultiList = document.getElementById('buyMulti');

const lemonadeDiv = gameDiv[0];
const slushieDiv = gameDiv[1];
const coffeeDiv = gameDiv[2];
const owned = document.getElementsByClassName('owned');
const earnings = document.getElementsByClassName('earnings');
const multiplier = document.getElementsByClassName('multiplier');
const cost = document.getElementsByClassName('cost');
const time = document.getElementsByClassName('time');
let cash = 20;
const totalCash = document.getElementById('total-money');
totalCash.innerText = cash;



games.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        const bus = e.target.className;
        if (bus === "lemonade") {
            lemonade.buyBusiness();
        } else if (bus === "slushie") {
            slushie.buyBusiness();
        } else if (bus === "coffee") {
            coffee.buyBusiness();
        }        
    }
});

buyMulti.addEventListener('click', e => {
    const multiButtons = buyMultiList.children;
    console.log(multiButtons);
    for (let i = 0; i < multiButtons.length; i++) {
        multiButtons[i].id = "";
    }
    if(e.target.tagName === 'LI') {
        console.log("stuff");
        e.target.id = "active";
    } else if (e.target.tagName === 'A') {
        console.log(e.target.parentElement);
        e.target.parentElement.id = "active";
    }
});













//Lemonade

lemonade = new Business();
lemonade.id = 0;
lemonade.base = 1;
lemonade.baseTime = 4;
lemonade.countTime = lemonade.baseTime;
lemonade.cost= 10;

owned[lemonade.id].innerText = lemonade.owned;
earnings[lemonade.id].innerText = lemonade.earnings;
multiplier[lemonade.id].innerText = lemonade.multiplier;
time[lemonade.id].innerText = lemonade.countTime;
cost[lemonade.id].innerText = lemonade.cost;

//Slushie

slushie = new Business();
slushie.id = 1;
slushie.base = 20;
slushie.baseTime = 8;
slushie.countTime = slushie.baseTime;
slushie.cost= 400;

owned[slushie.id].innerText = slushie.owned;
earnings[slushie.id].innerText = slushie.earnings;
multiplier[slushie.id].innerText = slushie.multiplier;
time[slushie.id].innerText = slushie.countTime;
cost[slushie.id].innerText = slushie.cost;

//Coffee

coffee = new Business();
coffee.id = 2;
coffee.base = 400;
coffee.baseTime = 12;
coffee.countTime = coffee.baseTime;
coffee.cost= 8000;

owned[coffee.id].innerText = coffee.owned;
earnings[coffee.id].innerText = coffee.earnings;
multiplier[coffee.id].innerText = coffee.multiplier;
time[coffee.id].innerText = coffee.countTime;
cost[coffee.id].innerText = coffee.cost;

function updateScreen () {

    time[lemonade.id].innerText = lemonade.countTime;
    time[slushie.id].innerText = slushie.countTime;
    time[coffee.id].innerText = coffee.countTime;
    earnings[lemonade.id].innerText = lemonade.earnings;
    earnings[slushie.id].innerText = slushie.earnings;
    earnings[coffee.id].innerText = coffee.earnings;
}

function incrementBus () {
    lemonade.earn();
    slushie.earn();
    coffee.earn();
    lemonade.increment();
    slushie.increment();
    coffee.increment();
}

// window.setInterval(lemonade.increment, 1000);
window.setInterval(incrementBus,1000);
window.setInterval(updateScreen, 1);
