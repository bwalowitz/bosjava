/* eslint-disable */

const name = 'Brandon';
const middle = "scott";
const last = `Walowitz`;
const sentence = "she's so cool";

const sentence2 = `she's so "cool"`;

const age = 40;

const song = `ohhh

yeah


i know`

const hello = "hello my name is " + name + ". Nice to meet you.";

const hello2 = `hello my name is ${name}. Nice to meet you.`;



const html = `
<div>
    <h2>${name} ${last}</h2>
    <p>${hello}</p>
</div>
`;

document.body.innerHTML = html;

let a = 100.5;
let b = 46.3;

const rand = Math.random()

document.getElementById(body).style.padding = '400px';

const smarties = 20;
const kids = 3;
const eachKidGets = Math.floor(smarties / kids);
const dadGets = smarties % kids;
console.log(`Each kid gets ${eachKidGets} and Dad gets ${dadGets} leftover`);
