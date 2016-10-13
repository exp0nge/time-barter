var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('Barter', function(){
  it('should list all transactions for authenticated user on /barter GET', (done) => {
    chai.request(server)
      .get('/barter')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('should create a barter for authenticated user on /barter/create POST');
  it('should retrieve barter for authenticated user on /barter/:id GET');
  it('should update barter for authenticated user on /barter/update/:id PUT');
  it('should delete barter for authenticated user on /barter/delete/:id DELETE');
});
