const {Given,When,Then} = require('cucumber');
require('cucumberjs-skiptag');

Given('This is given',()=>{
console.log('inside given');
});

When('This is when',()=>{
    console.log('inside when');
});

Then('This is then',()=>{
    console.log('inside then');
});