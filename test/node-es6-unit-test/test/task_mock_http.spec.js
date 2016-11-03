/**
 * Created by david on 03/11/16.
 */
var nock = require('nock');
import chai from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;
const uri = 'http://localhost:3000';

describe('Task Mock Http Request', () => {
    beforeEach(function() {
        var taskListGet = {
            "status": true,
            "data": [
                {
                    "_id": "581a6e1d20ce551e64900b7d",
                    "name": "initial project",
                    "__v": 0,
                    "date": "2016-11-02T22:52:13.149Z",
                    "completed": false
                },
                {
                    "_id": "581a6e2a20ce551e64900b7e",
                    "name": "initial project",
                    "__v": 0,
                    "date": "2016-11-02T22:52:26.027Z",
                    "completed": false
                }
            ]
        };

        nock(uri)
            .get('/tasks')
            .reply(200, taskListGet);

        nock(uri)
            .post('/tasks', {
                name: 'teste mock http =)'
            })
            .reply(201, {
                "status": true,
                "data": {
                    "__v": 0,
                    "name": "teste mock http =)",
                    "_id": "581a777812baf92bbc02c02e",
                    "date": "2016-11-02T23:32:08.428Z",
                    "completed": false
                }
            });

        nock(uri)
            .post('/tasks')
            .reply(500, {
                "status": false,
            });
    });

    it ('should make a mock request and return a list of tasks', (done) => {
        request(uri)
            .get('/tasks')
            .end((err, res) => {
                if (!err) {
                    expect(res.body.status).to.be.true;
                    expect(res.body.data).to.be.an('array');
                    expect(res.body.data[0].name).to.equal('initial project');
                    done();
                }
            })
    });

    it('should make a mock request and not send name form data', (done) => {
        request(uri)
            .post('/tasks')
            .send()
            .end((err, res) => {
                if (err) {
                    expect(res.body.status).to.be.false;
                    expect(res).to.have.status(500);
                    done();
                }
            });
    });

    it('should make a mock request and send name form data', (done) => {
        request(uri)
            .post('/tasks')
            .send({
                name:'teste mock http =)'
            })
            .end((err, res) => {
                if (!err) {
                    expect(res.body.status).to.be.true;
                    expect(res.body.data.name).to.equal('teste mock http =)');
                    expect(res).to.have.status(201);
                    done();
                }
            });
    });
});