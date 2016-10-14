process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('Transaction', function(){
  it('should list all transactions for authenticated user on /transaction GET', (done) => {
    chai.request(server)
      .get('/transaction')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('should create a transaction for authenticated user on /transaction/create POST', (done) => {
    chai.request(server)
      .post('/transaction/create')
      .send({})
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('should retrieve transaction for authenticated user on /transaction/:id GET', (done) => {
    chai.request(server)
      .get('/transaction/0')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('should update transaction for authenticated user on /transaction/update/:id PUT', (done) => {
    chai.request(server)
      .put('/transaction/update/1')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('should delete transaction for authenticated user on /transaction/delete/:id DELETE', (done) => {
    chai.request(server)
      .delete('/transaction/delete/1')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
