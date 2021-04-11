const schedule = require('node-schedule');

const port = 8000;

// 특정 시간에 작동
const date = new Date(2021, 4, 11, 12, 40, 30);

console.log(date);

const j = schedule.scheduleJob(date, () => {
    console.log('no pain, no gain');
});

// 매시간 작동
const rule = new schedule.RecurrenceRule();
rule.minute = 32;

const k = schedule.scheduleJob(rule, () => {
    console.log('Laziness is nothing more than the habit of resting before you get tired.');
});

j.cancel();
k.cancel();