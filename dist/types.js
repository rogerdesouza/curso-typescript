"use strict";
// boolean (true, false)
var isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
var message;
message = 'foo';
// number (int, float, hex, binary)
var total;
total = 0xff0;
// array (type[], Array<number> generic)
var items;
items = [1, 2, 3];
var values;
values = [1, 2, 3];
// tuple
var title;
title = [1, "foo"];
var actions;
actions = [1, 'ADD', true];
// enum
var colors;
(function (colors) {
    colors["white"] = "#fff";
    colors["black"] = "#000";
})(colors || (colors = {}));
// any (qualquer coisa) não é legal
var coisa;
coisa = "teste";
// void (vazio)
function logger() {
    console.log('foo');
}
// never
function error() {
    throw new Error("error");
}
// object
var cart;
cart = {
    key: 'fi'
};
// type inference
var message2 = 'mensagem definida';
message2 = "string nova";
var id;
id = 1;
id = "1";
var account = {
    id: 1,
    name: "Roger"
};
var char = {
    nickname: "roger",
    level: 100
};
var player = {
    id: 1,
    name: "Roger",
    email: "rogerdesouza99@gmail.com",
    nickname: "roger",
    level: 100
};
