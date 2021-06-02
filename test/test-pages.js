var expect = require('chai').expect;
var request = require('request');

it('Main page content', function () {
    request('http://localhost:3000', function (error, response, body) {
        expect(body).to.equal('[{"action":"run","time":75},{"action":"jump","time":200}]');
    });
});