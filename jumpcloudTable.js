const AWS = require("aws-sdk");
AWS.config.update({
    region: "local",
    endpoint: "http://localhost:8000"
});
var dynamodb = new AWS.DynamoDB();
var params = {
    TableName: "jumpcloudTable",
    KeySchema: [
        { AttributeName: "action", KeyType: "HASH" },  //Partition key
    ],
    AttributeDefinitions: [
        { AttributeName: "action", AttributeType: "S" },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    }
};
dynamodb.createTable(params, function (err, data) {
    if (err) {
        console.error("Error JSON.", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table.", JSON.stringify(data, null, 2));
    }
});