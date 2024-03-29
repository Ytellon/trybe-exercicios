const sinon = require('sinon');
const {
  expect
} = require('chai');

const MoviesService = require('../../services/movieService');
const MoviesController = require('../../controllers/movieController');

describe('Ao chamar o controller de create', () => {
  describe('quando o payload informado não é válido', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'create')
        .resolves(false);
    });

    after(() => {
      MoviesService.create.restore();
    });

    it('é chamado o status com o código 400', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Dados inválidos')).to.be.equal(true);
    });

  });

  describe('quando é inserido com sucesso', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'create')
        .resolves(true);
    });

    after(() => {
      MoviesService.create.restore();
    });

    it('é chamado o status com o código 201', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(true);
    });

  });
  describe('ao chamar o controller de getById', () => {
    describe('quando não existe fiilmes no bd', async () => {
      const response = {};
      const request = {};

      before(() => {
        request.params = {
          id: 1,
        };

        response.status = sinon.stub()
          .returns(response);
        response.send = sinon.stub()
          .returns();

        sinon.stub(MoviesService, 'getById').resolves(null);
      });
      after(() => {
        MoviesService.getById.restore();
      })
      it('é chamado o status com o código 404', async () => {
        await MoviesController.getById(request, response);

        expect(response.status.calledWith(404)).to.be.equal(true);
      })
      it('é chamado o send com a mensagem "Filme não encontrado"', async () => {
        await MoviesController.getById(request, response);

        expect(response.send.calledWith('Filme não encontrado')).to.be.equal(true);
      })
    });
  });
  describe('quando existe um filme com ID informado', () => {
    const response = {};
    const request = {};

    before(() => {
      request.params = {
        id: 1,
      };

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'getById').resolves({
        id: 1,
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      });
    })
    after(() => {
      MoviesService.getById.restore();
    })
    it('é chamado o status com o código 200', async () => {
      await MoviesController.getById(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    })
    it('é chamado o send com o filme', async () => {
      await MoviesController.getById(request, response);

      expect(response.send.calledWith({
        id: 1,
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      })).to.be.equal(true);
    });
  })
});