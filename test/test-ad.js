var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('Ad', function(){
  it('should list all transactions for authenticated user on /ad GET' /*, (done) => {
    chai.request(server)
      .get('/barter')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  }*/);
  it('should create a ad for authenticated user on /ad/create POST');
  it('should retrieve ad for authenticated user on /ad/:id GET');
  it('should update ad for authenticated user on /ad/:id PUT');
  it('should activate ad for authenticated user on /ad/:id/activate PUT');
  it('should delete ad for authenticated user on /ad/:id/deactivate DELETE');

});
