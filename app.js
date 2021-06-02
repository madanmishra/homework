var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var AWS = require("aws-sdk");
var app = express();

AWS.config.update({
  region: "local",
  endpoint: "http://localhost:8000"
});

app.listen(3000, () => console.log('Jump Cloud API listening on port 3000!, Please open http://localhost:3000/ in browser'))
var docClient = new AWS.DynamoDB.DocumentClient();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  var params = {
    TableName: "jumpcloudTable",
  };
  console.log("Scanning jump Cloud Table");
  docClient.scan(params, onScan);
  function onScan(err, data) {
    if (err) {
      console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      res.send(data.Items)
      console.log("Scan succeeded.");
      if (typeof data.LastEvaluatedKey != "undefined") {
        console.log("Scanning for more...");
        params.ExclusiveStartKey = data.LastEvaluatedKey;
        docClient.scan(params, onScan);
      }
    }
  }
})