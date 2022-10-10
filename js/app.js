'use strict'

let seattleList = document.getElementById('seattleList');

console.log(seattleList);

let hours = ['6 a.m', '7 a.m', '8 a.m', '9 a.m', '10 a.m', '11 a.m', '12 p.m', '1 p.m', '2 p.m', '3 p.m', '4 p.m', '5 p.m', '6 p.m', '7 p.m'];

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  sDailyTotal: 0,
  cookiesSoldPerHourArray: [],
  getRandomCustomers: function () {
    return Math.round(Math.random() * (this.max - this.min + 1) + this.min);
  }
};

console.log(seattle.getRandomCustomers());
let seattleH2 = document.createElement('h2');
seattleH2.textContent = 'Seattle';
seattleList.appendChild(seattleH2);
// i++ is the same as i=i+1
for (let i = 0; i < hours.length; i++) {
  let cookiesThisHour = Math.ceil(seattle.getRandomCustomers() * seattle.avg);
  seattle.cookiesSoldPerHourArray.push(cookiesThisHour);
  // let result = seattle.dailyTotal(this.cookiesSoldPerHourArray, this.getRandomCustomers);
  seattle.sDailyTotal = seattle.sDailyTotal +cookiesThisHour;
  console.log(cookiesThisHour, seattle.sDailyTotal);
}

for (let i = 0; i < hours.length; i++) {
  let li = document.createElement('li');
  // li.textContent = hours[i];
  li.textContent = `${hours[i]}: ${seattle.cookiesSoldPerHourArray[i]} cookies`;
  seattleList.appendChild(li);

}

let sDailyTotal = document.createElement('li');
sDailyTotal.innerText = `Total: ${seattle.sDailyTotal} cookies!`;
seattleList.appendChild(sDailyTotal);

console.log(seattle);

let tokyoList = document.getElementById('tokyoList');

console.log(tokyoList);

let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  tDailyTotal: 0,
  cookiesSoldPerHourArray: [],
  getRandomCustomers: function () {
    return Math.round(Math.random() * (this.max - this.min + 1) + this.min);
  }
};

console.log(tokyo.getRandomCustomers());
let tokyoH2 = document.createElement('h2');
tokyoH2.textContent = 'Tokyo';
tokyoList.appendChild(tokyoH2);

for (let i = 0; i < hours.length; i++) {
  let cookiesThisHour = Math.ceil(tokyo.getRandomCustomers() * tokyo.avg);
  tokyo.cookiesSoldPerHourArray.push(cookiesThisHour);
  tokyo.tDailyTotal = tokyo.tDailyTotal +cookiesThisHour;
  console.log(cookiesThisHour, tokyo.tDailyTotal);
}

for (let i = 0; i < hours.length; i++) {
  let li = document.createElement('li');
  // li.textContent = hours[i];
  li.textContent = `${hours[i]}: ${tokyo.cookiesSoldPerHourArray[i]} cookies`;
  tokyoList.appendChild(li);
}
let tDailyTotal = document.createElement('li');
tDailyTotal.innerText = `Total: ${tokyo.tDailyTotal} cookies!`;
tokyoList.appendChild(tDailyTotal);

console.log(tokyo);

let dubaiList = document.getElementById('dubaiList');

console.log(dubaiList);

let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  dDailyTotal: 0,
  cookiesSoldPerHourArray: [],
  getRandomCustomers: function () {
    return Math.round(Math.random() * (this.max - this.min + 1) + this.min);
  }
};

console.log(dubai.getRandomCustomers());
let dubaiH2 = document.createElement('h2');
dubaiH2.textContent = 'Dubai';
dubaiList.appendChild(dubaiH2);

for (let i = 0; i < hours.length; i++) {
  let cookiesThisHour = Math.ceil(dubai.getRandomCustomers() * dubai.avg);
  dubai.cookiesSoldPerHourArray.push(cookiesThisHour);
  dubai.dDailyTotal = dubai.dDailyTotal +cookiesThisHour;
  console.log(cookiesThisHour, dubai.dDailyTotal);
}

for (let i = 0; i < hours.length; i++) {
  let li = document.createElement('li');
  // li.textContent = hours[i];
  li.textContent = `${hours[i]}: ${dubai.cookiesSoldPerHourArray[i]} cookies`;
  dubaiList.appendChild(li);
}
let dDailyTotal = document.createElement('li');
dDailyTotal.innerText = `Total: ${dubai.dDailyTotal} cookies!`;
dubaiList.appendChild(dDailyTotal);

console.log(dubai);

let parisList = document.getElementById('parisList');

console.log(parisList);

let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  pDailyTotal: 0,
  cookiesSoldPerHourArray: [],
  getRandomCustomers: function () {
    return Math.round(Math.random() * (this.max - this.min + 1) + this.min);
  }
};

console.log(paris.getRandomCustomers());
let parisH2 = document.createElement('h2');
parisH2.textContent = 'Paris';
parisList.appendChild(parisH2);

for (let i = 0; i < hours.length; i++) {
  let cookiesThisHour = Math.ceil(paris.getRandomCustomers() * paris.avg);
  paris.cookiesSoldPerHourArray.push(cookiesThisHour);
  paris.pDailyTotal = paris.pDailyTotal +cookiesThisHour;
  console.log(cookiesThisHour, paris.pDailyTotal);
}

for (let i = 0; i < hours.length; i++) {
  let li = document.createElement('li');
  // li.textContent = hours[i];
  li.textContent = `${hours[i]}: ${paris.cookiesSoldPerHourArray[i]} cookies`;
  parisList.appendChild(li);
}

let pDailyTotal = document.createElement('li');
pDailyTotal.innerText = `Total: ${paris.pDailyTotal} cookies!`;
parisList.appendChild(pDailyTotal);

console.log(paris);

let limaList = document.getElementById('limaList');

console.log(limaList);

let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  lDailyTotal: 0,
  cookiesSoldPerHourArray: [],
  getRandomCustomers: function () {
    return Math.round(Math.random() * (this.max - this.min + 1) + this.min);
  }
};

console.log(paris.getRandomCustomers());
let limaH2 = document.createElement('h2');
limaH2.textContent = 'Lima';
limaList.appendChild(limaH2);

for (let i = 0; i < hours.length; i++) {
  let cookiesThisHour = Math.ceil(lima.getRandomCustomers() * lima.avg);
  lima.cookiesSoldPerHourArray.push(cookiesThisHour);
  lima.lDailyTotal = lima.lDailyTotal +cookiesThisHour;
  console.log(cookiesThisHour, lima.lDailyTotal);
}

for (let i = 0; i < hours.length; i++) {
  let li = document.createElement('li');
  // li.textContent = hours[i];
  li.textContent = `${hours[i]}: ${lima.cookiesSoldPerHourArray[i]} cookies`;
  limaList.appendChild(li);
}

let lDailyTotal = document.createElement('li');
lDailyTotal.innerText = `Total: ${lima.lDailyTotal} cookies!`;
limaList.appendChild(lDailyTotal);

console.log(lima);

