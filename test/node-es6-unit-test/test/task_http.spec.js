/**
 * Created by david on 02/11/16.
 */
import chai from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;
const uri = 'http://localhost:3000';

describe('Task Request', () => {
    it ('should make a request and return a list of tasks', (done) => {
        request(uri)
            .get('/tasks')
            .end((err, res) => {
                if (!err) {
                    expect(res.body.status).to.be.true;
                    expect(res.body.data).to.be.an('array');
                    done();
                }
            })
    });

    it('should make a request and not send name form data', (done) => {
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

    it('should make a request and send name form data', (done) => {
        request(uri)
            .post('/tasks')
            .send({
                name: 'Task test'
            })
            .end((err, res) => {
                if (!err) {
                    expect(res.body.status).to.be.true;
                    expect(res).to.have.status(201);
                    done();
                }
            });
    });
});