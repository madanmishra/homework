/*
This module will import data from data.json to dynamodb Table
*/
const AWS = require("aws-sdk");
const fs = require('fs');
AWS.config.update({
    region: "local",
    endpoint: "http://localhost:8000"
});
var docClient = new AWS.DynamoDB.DocumentClient();
console.log("Importing data into DynamoDB. Please wait.");
let array = JSON.parse(fs.readFileSync('data.json', 'utf8'));

/*
Before we start import lets calculate average and the store
*/

var holder = {};
let count = 1
array.map(function (d) {
    if (holder.hasOwnProperty(d.action)) {
        count = count + 1
        holder[d.action] = holder[d.action] + (d.time) / count;
    } else {
        holder[d.action] = d.time;
    }
});

var obj2 = [];
for (var prop in holder) {
    obj2.push({ action: prop, time: holder[prop] });
}
console.log(obj2);
console.log(count)

obj2.forEach(function (a) {
    console.log("abc", a)
    var params = {
        TableName: "jumpcloudTable",
        Item: {
            "action": a.action,
            "avg": a.time
        }
    };
    docClient.put(params, function (err, data) {
        if (err) {
            console.error(err);
        } else {
            console.log("PutItem succeeded:");
        }
    });
});