"use strict";
//Basic Types
let id = 5;
let company = "Traversy Media";
let isPublished = true;
let x = "Hello World ";
let ids = [1, 2, 4, 5, 3];
let arr = [1, true, 'Hello'];
//Tuple
let person = [1, true, "samba"];
//Tuple Array
let employee;
employee = [
    [1, 'chika'],
    [2, 'Tobi'],
    [3, 'Headies']
];
//Union
let pid;
pid = "22";
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 0] = "up";
    Direction1[Direction1["down"] = 1] = "down";
    Direction1[Direction1["left"] = 2] = "left";
    Direction1[Direction1["right"] = 3] = "right";
})(Direction1 || (Direction1 = {}));
//objects method 1
const user = {
    id: 25,
    name: "wizkid"
};
const useer = {
    id: 1,
    name: "davido"
};
let cid = 1;
let customerId = cid;
//functions
function addNum(x, y) {
    return x + y;
}
const user1 = {
    id: 1,
    name: 'Lash'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
