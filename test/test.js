var expect  = require("chai").expect;
var request = require("request");

describe("Addition of two numbers", function() {
        var url = "http://localhost:3000/addNumbers";
        it("returns status 200 to check if api works", function(done) {
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("request returns status 200 within the message body", function(done) {
            request(url, function(error, response, body){
                body = JSON.parse(body);
                expect(body.statusCode).to.equal(200);
                done();
            });
        });
        
        it("result equal to 50", function(done){
            request(url, function(error, response, body){
                body = JSON.parse(body);
                expect(body.data).to.equal(50);
                done();
            });
        })

        it("result equal to 70", function(done){
            request(url, function(error, response, body){
                body = JSON.parse(body);
                expect(body.data).to.not.equal(70);
                done();
            });
        })

    });