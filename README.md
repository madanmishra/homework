# Download DynamoDB local

https://s3.eu-central-1.amazonaws.com/dynamodb-local-frankfurt/dynamodb_local_latest.tar.gz

Download the latest version of DynamoDB
Unzip the file contents into a new folder. For example, we can call it dynamodb

cd dynamodb

java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb

If you're greeted with the following log on your console, you have successfully started the DynamoDB instance locally.

Initializing DynamoDB Local with the following configuration:

Port:   8000

InMemory:   false

DbPath: null

SharedDb:   true

shouldDelayTransientStatuses:   false

CorsParams: *

# AWS CLI Setup 

aws configure

AWS Access Key ID [None]: ***********

AWS Secret Access Key [None]: ****************

Default region name [None]: local

Default output format [None]: json

# Reference 

https://dev.to/ajinkabeer/run-a-dynamodb-instance-locally-with-node-js-without-an-aws-account-58k6


# homework

[homework app generated by scaffold-express-app](https://github.com/saijeevanballa/express-generator)

## Introduction

This is a express scaffold project to quickly get up and running with express js project using JavaScript.

## Setup

`step 1:` Change directory to project folder

```sh
git clone cloning url
$ cd homework
```

`step 2:` Install the dependencies in the local node_modules folder.


```sh
$ npm install
```

`step 3:` Create Dynamo Table Locally

```sh
$ node jumpcloudTable.js
```

`step 4:` import data to Table

```sh
$ node putjumpCloudData.js
```

`step 5:` npm run start is a run command from your scripts located in your package.

```sh
$ npm start
```

`step 6:` Open New Terminal run 

```sh
$ npm test
```

Please change the actions and time in data.json and perform step 4 and step 5 again to see new updated values

