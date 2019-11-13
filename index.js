'use strict';

const fs = require('fs');
const pointDays = JSON.parse(fs.readFileSync('./pointDays.json'));

let currentDate = new Date();
let toDate = new Date();

toDate.setFullYear(currentDate.getFullYear() + 1);

while(toDate > currentDate) {
  const a = pointDays.filter((x) => x.days.includes(currentDate.getDate()));
  const b = pointDays.filter((x) => x.weekDays.includes(new Intl.DateTimeFormat('ja-JP', { weekday: 'long'}).format(currentDate)));

  a.forEach((x) => {
    console.log(`[${currentDate.toLocaleString()}] は [${x.storeName}] で [${x.campaignName}] デーです。` )
  })
  b.forEach((x) => {
    console.log(`[${currentDate.toLocaleString()}] は [${x.storeName}] で [${x.campaignName}] デーです。` )
  })
  currentDate.setDate(currentDate.getDate() + 1);
}
