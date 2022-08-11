const sinon = require('sinon');
const {
  expect
} = require('chai');
const connection = require('../../models/connection');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', async () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });

  });

  describe('quando é inserido com sucesso', async () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesModel, 'create')
        .resolves({
          id: ID_EXAMPLE
        });
    });

    after(() => {
      MoviesModel.create.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });

  describe('busque apenas um filme no bd por seu ID', () => {
    before(async () => {
      const result = [[]];

      sinon.stub(connection, 'execute').resolves(result);
    });
    after (async () => {
      connection.execute.restore();
    })

    it('retorna nulo quando não existe um filme com ID informado', async () => {
      const response = await MoviesService.getById();

      expect(response).to.be.equal(null);
    });
  });

  describe('quando existe um filme com ID informado', () => {
    before(async () => {
      sinon.stub(MoviesService, 'getById').resolves({
        id: 1,
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      });
    })
    after(async () => {
      MoviesService.getById.restore();
    })

    it('retorna um objeto', async () => {
      const response = await MoviesService.getById(1);

      expect(response).to.be.a('object');
    })
    it('o objeto não está vazio', async () => {
      const response = await MoviesService.getById(1);

      expect(response).to.not.be.empty;
    })
    it('verifica as chaves do objeto', async () => {
      const response = await MoviesService.getById(1);

      expect(response).to.have.all.keys('id', 'title', 'directedBy', 'releaseYear');
    })
  })
});