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
  it('should create a transaction for authenticated user on /transaction/create POST');
  it('should retrieve transaction for authenticated user on /transaction/:id GET');
  it('should update transaction for authenticated user on /transaction/update/:id PUT');
  it('should delete transaction for authenticated user on /transaction/delete/:id DELETE');
});
