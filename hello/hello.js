'use strict';
var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

function call(name) {
    console.log('calling ' + name);
}

module.exports = {
    greet: greet,
    call: call
}